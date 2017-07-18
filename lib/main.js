var Web3 = require('web3');
var http = require('http');
var tropo_webapi = require('tropo-webapi');

//Web3js section
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    console.log('No web3? You should consider trying MetaMask!')
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider());
}

//Tropo section
var server = http.createServer(function (request, response) {
	
    var tropo = new TropoWebAPI();
    
    tropo.call("+16022284486");
    tropo.say("Tag, you're it!");
	
    response.end(TropoJSON(tropo));

}).listen(8000); 