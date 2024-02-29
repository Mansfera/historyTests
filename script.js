var queryString = window.location.search;
var params = new URLSearchParams(queryString);
var access_token = params.get("access_token");
var allowedPart = params.get("allowedPart");

var decrypted_token = Number(
  CryptoJS.AES.decrypt(access_token, "lag@history").toString(CryptoJS.enc.Utf8)
);
var decrypted_blocks = CryptoJS.AES.decrypt(
  allowedPart,
  "lag@history"
).toString(CryptoJS.enc.Utf8);

if ((params = null)) {
  window.location = "./expired_token.html";
}

function updateTime() {
  var time = decrypted_token - Date.now();
  let days = Math.floor(time / 60 / 60 / 24);
  let hours = Math.floor(time / 60 / 60);
  hours = hours < 10 ? "0" + hours : hours;
  let minutes = Math.floor(time / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("remainingTime").innerHTML =
    "Часу залишилося: " + days + ":" + hours + ":" + minutes + ":" + seconds;
}
if (decrypted_token < Date.now()) {
  window.location = "./expired_token.html?" + params;
} else {
  for (var i = 1; i < 6; i++) {
    var block = document.getElementById("b" + i);
    if (decrypted_blocks.includes(i)) {
      block.classList.remove("blocked");
    } else {
      while (block.firstChild) {
        block.removeChild(block.firstChild);
      }
    }
  }

  var block = document.getElementById("NMT");
  if (decrypted_blocks.includes("6")) {
    block.classList.remove("blocked");
  } else {
    while (block.firstChild) {
      block.removeChild(block.firstChild);
    }
  }
}
