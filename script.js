var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
};

$.ajax(settings).done(function (response) {
    console.log(response);
    $('.coin-list .coin:nth-child(1) h3').text('$' + response.bitcoin.usd);
    $('.coin-list .coin:nth-child(2) h3').text('$' + response.ethereum.usd);
    $('.coin-list .coin:nth-child(3) h3').text('$' + response.dogecoin.usd);
});