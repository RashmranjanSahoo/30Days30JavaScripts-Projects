var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd",
    method: "GET",
    headers: {}
};

$.ajax(settings).done(function (res) {
    $("#bitcoin").text("$" + res.bitcoin.usd);
    $("#ethereum").text("$" + res.ethereum.usd);
    $("#dogecoin").text("$" + res.dogecoin.usd);
});

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd")
    .then(response => response.json())
    .then(data => {
        document.getElementById("bitcoin-price").innerHTML =
            "$" + data.bitcoin.usd;

        document.getElementById("ethereum-price").innerHTML =
            "$" + data.ethereum.usd;

        document.getElementById("dogecoin-price").innerHTML =
            "$" + data.dogecoin.usd;
    });