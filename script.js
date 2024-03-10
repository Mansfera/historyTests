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

function updateTime() {
  var time = Math.floor((decrypted_token - Date.now()) / 1000);
  let days = Math.floor(time / 60 / 60 / 24);
  let hours = Math.floor(time / 60 / 60) - days * 24;
  hours = hours < 10 ? "0" + hours : hours;
  let minutes = Math.floor(time / 60) - hours * 60 - days * 24 * 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let warning = "";
  if (time < 900) {
    warning = " ⚠️";
  }

  let time_str = "";
  let amount_str = "";

  // відмінювання днів
  if (days >= 1) {
    if (days === 1) {
      amount_str = "день";
    } else if (days > 1 && days < 5) {
      amount_str = "дні";
    } else {
      amount_str = "днів";
    }
    time_str = days + " " + amount_str;
  }

  // відмінювання годин
  if (hours > 0) {
    if (hours === 1) {
      amount_str = "година";
    } else if (hours > 1 && hours < 5) {
      amount_str = "години";
    } else {
      amount_str = "годин";
    }
    time_str += " " + hours + " " + amount_str;
  }

  // відмінювання хвилин
  if (minutes > 0) {
    if (minutes === 1) {
      amount_str = "хвилина";
    } else if (minutes > 1 && minutes < 5) {
      amount_str = "хвилини";
    } else {
      amount_str = "хвилин";
    }
    time_str += " " + minutes + " " + amount_str;
  }

  // відмінювання секунд
  if (seconds > 0) {
    if (seconds === 1) {
      amount_str = "секунда";
    } else if (seconds > 1 && seconds < 5) {
      amount_str = "секунди";
    } else {
      amount_str = "секунд";
    }
    time_str += " " + seconds + " " + amount_str;
  }

  document.getElementById("remainingTime").innerHTML =
    "Часу залишилося:" + time_str + warning;

  if (time < 0) {
    window.location = "./expired_token.html?" + params;
  }
}
setInterval(updateTime, 1000);


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
      var oImg = document.createElement("img");
      oImg.setAttribute('src', './lock.png');
      block.appendChild(oImg);
    }
  }

  var block = document.getElementById("NMT");
  if (decrypted_blocks.includes("6")) {
    block.classList.remove("blocked");
  } else {
    while (block.firstChild) {
      block.removeChild(block.firstChild);
    }
    var oImg = document.createElement("img");
      oImg.setAttribute('src', './lock.png');
      block.appendChild(oImg);
  }
}