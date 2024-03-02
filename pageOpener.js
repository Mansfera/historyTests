var queryString = window.location.search;
var params = new URLSearchParams(queryString);
var access_token = params.get("access_token");
var allowedPart = params.get("allowedPart");

//check for access
if (access_token == null) {
  console.log("No access token detected!");
  window.location = "/historyTests/expired_token.html";
}

var decrypted_token = Number(
  CryptoJS.AES.decrypt(access_token, "lag@history").toString(CryptoJS.enc.Utf8)
);
if (decrypted_token < Date.now() && params.get("expired") == null) {
  console.log("Access token expired!");
  window.location = "/historyTests/expired_token.html?expired=a&" + params;
}
//end check

function openTest(block, id) {
  window.location =
    "/historyTests/test/index.html?access_token=" +
    access_token.replace("+", "%2B").replace("=", "%3D") +
    "&allowedPart=" +
    allowedPart.replace("+", "%2B").replace("=", "%3D") +
    "&block=" +
    block +
    "&id=" +
    id;
}
function openFullTest(block, id) {
  window.location =
    "/historyTests/test-all/index.html?access_token=" +
    access_token.replace("+", "%2B").replace("=", "%3D") +
    "&allowedPart=" +
    allowedPart.replace("+", "%2B").replace("=", "%3D") +
    "&block=" +
    block +
    "&id=" +
    id;
}
function openFinalTest(block) {
  window.location =
    "/historyTests/final/index.html?access_token=" +
    access_token.replace("+", "%2B").replace("=", "%3D") +
    "&allowedPart=" +
    allowedPart.replace("+", "%2B").replace("=", "%3D") +
    "&block=" +
    block;
}
function exitToMenu() {
  window.location =
    "/historyTests/index.html?access_token=" +
    access_token.replace("+", "%2B").replace("=", "%3D") +
    "&allowedPart=" +
    allowedPart.replace("+", "%2B").replace("=", "%3D");
}
function openBlock(block) {
  window.location =
    "/historyTests/block"+block+"/index.html?access_token=" +
    access_token.replace("+", "%2B").replace("=", "%3D") +
    "&allowedPart=" +
    allowedPart.replace("+", "%2B").replace("=", "%3D");
}
function openConspect(block) {
  window.location =
    "/historyTests/block"+block+"/general-info.html?access_token=" +
    access_token.replace("+", "%2B").replace("=", "%3D") +
    "&allowedPart=" +
    allowedPart.replace("+", "%2B").replace("=", "%3D");
}
function openVideo(block) {
  window.location =
    "/historyTests/block"+block+"/video-player/index.html?access_token=" +
    access_token.replace("+", "%2B").replace("=", "%3D") +
    "&allowedPart=" +
    allowedPart.replace("+", "%2B").replace("=", "%3D");
}