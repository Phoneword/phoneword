var Web3 = require('web3');
var http = require('http');
var tropo_webapi = require('tropo-webapi');
var url = require('url');

 
//Web3js section
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    console.log('No web3? You should consider trying MetaMask!')
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider());
}

//Tropo section
//Todo: move this out of main/bundle and into a start script for npm
var server = http.createServer(function (request, response) {  
  
	request.addListener('data', function(data){
  		json = data.toString();
	});
    
	request.addListener('end', function() {
	
		var session = JSON.parse(json);
		var tropo = new TropoWebAPI();
	
		var to = "+" + session.session.parameters.numbertodial;
		var name = session.session.parameters.customername;
		var msg = session.session.parameters.msg;

		//to, answerOnMedia, channel, from, headers, name, network, recording, required, timeout
		tropo.call(to, null, null, null, null, null, "SMS", null, null, null);
		tropo.say(msg + ", " + name + ". " + "Some people don't get that.");
	
		response.end(TropoJSON(tropo));
	});

}).listen(8000); 

