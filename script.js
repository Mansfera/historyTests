var queryString = window.location.search;
var params = new URLSearchParams(queryString);
var access_token = params.get('access_token');
var allowedPart = params.get('allowedPart');

var decrypted_token = Number(CryptoJS.AES.decrypt(access_token, "lag@history").toString(CryptoJS.enc.Utf8));
var decrypted_blocks = Number(CryptoJS.AES.decrypt(allowedPart, "lag@history").toString(CryptoJS.enc.Utf8));

if (params == null) {
    window.location = "./expired_token.html"
}
if (decrypted_token < Date.now()) {
    // window.location = "./expired_token.html"C
} else {
    if (decrypted_blocks.search("1")) {
        document.getElementById("b1").classList.remove("blocked")
    } else {
        document.removeChild(document.getElementById("b1"))
    }

    if (decrypted_blocks.search("2")) {
        document.getElementById("b2").classList.remove("blocked")
    } else {
        document.removeChild(document.getElementById("b2"))
    }

    if (decrypted_blocks.search("3")) {
        document.getElementById("b3").classList.remove("blocked")
    } else {
        document.removeChild(document.getElementById("b3"))
    }

    if (decrypted_blocks.search("4")) {
        document.getElementById("b4").classList.remove("blocked")
    } else {
        document.removeChild(document.getElementById("b4"))
    }

    if (decrypted_blocks.search("5")) {
        document.getElementById("b5").classList.remove("blocked")
    } else {
        document.removeChild(document.getElementById("b5"))
    }

    if (decrypted_blocks.search("6")) {
        document.getElementById("NMT").classList.remove("blocked")
    } else {
        document.removeChild(document.getElementById("NMT"))
    }

}
