var queryString = window.location.search;
var params = new URLSearchParams(queryString);
var access_token = params.get("access_token");
var allowedPart = params.get("allowedPart");

//check for access
if (access_token == null) {
  window.location = "./expired_token.html";
}

var decrypted_token = Number(
  CryptoJS.AES.decrypt(access_token, "lag@history").toString(CryptoJS.enc.Utf8)
);
if (decrypted_token < Date.now()) {
  window.location = "/expired_token.html?" + params;
}
//end check

function openTest(block, id) {
  window.location =
    "/test/index.html?access_token=" +
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
    "/test-all/index.html?access_token=" +
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
    "/block"+block+"/final/index.html?access_token=" +
    access_token.replace("+", "%2B").replace("=", "%3D") +
    "&allowedPart=" +
    allowedPart.replace("+", "%2B").replace("=", "%3D");
}
function exitToMenu() {
  window.location =
    "/index.html?access_token=" +
    access_token.replace("+", "%2B").replace("=", "%3D") +
    "&allowedPart=" +
    allowedPart.replace("+", "%2B").replace("=", "%3D");
}
function openBlock(block) {
  window.location =
    "/block"+block+"/index.html?access_token=" +
    access_token.replace("+", "%2B").replace("=", "%3D") +
    "&allowedPart=" +
    allowedPart.replace("+", "%2B").replace("=", "%3D");
}
function openConspect(block) {
  window.location =
    "/block"+block+"/general-info.html?access_token=" +
    access_token.replace("+", "%2B").replace("=", "%3D") +
    "&allowedPart=" +
    allowedPart.replace("+", "%2B").replace("=", "%3D");
}
function openVideo(block) {
  window.location =
    "/block"+block+"/video-player/index.html?access_token=" +
    access_token.replace("+", "%2B").replace("=", "%3D") +
    "&allowedPart=" +
    allowedPart.replace("+", "%2B").replace("=", "%3D");
}