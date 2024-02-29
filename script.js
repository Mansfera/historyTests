var queryString = window.location.search;
var params = new URLSearchParams(queryString);
var access_token = params.get('access_token');
var allowedPart = params.get('allowedPart');

var decrypted_token = Number(CryptoJS.AES.decrypt(access_token, "lag@history").toString(CryptoJS.enc.Utf8));
var decrypted_blocks = CryptoJS.AES.decrypt(allowedPart, "lag@history").toString(CryptoJS.enc.Utf8);

if (params == null) {
    window.location = "./expired_token.html"
}
if (decrypted_token > Date.now() / 1000) {
    window.location = "./expired_token.html?"+params
} else {
    for (var i = 1; i < 6; i++){
        var block = document.getElementById("b"+i);
        if (decrypted_blocks.includes(i)) {
            block.classList.remove("blocked")
        } else {
            while (block.firstChild) {
                block.removeChild(block.firstChild);
            }
        }
    }

    var block = document.getElementById("NMT");
    if (decrypted_blocks.includes("6")) {
        block.classList.remove("blocked")
    } else {
        while (block.firstChild) {
            block.removeChild(block.firstChild);
        }
    }
}
