var Web3 = require('web3');
var http = require('http');
var tropo_webapi = require('tropo-webapi');
var url = require('url');
var jquery = require('jquery');

$( document ).ready(function() {
    console.log( "ready!" );
    document.getElementById("dialOut").addEventListener ("click", dialOut, false);

});



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
		tropo.say(msg + ", " + name + ", " + ". Some people don't get that.");
	
		response.end(TropoJSON(tropo));
	});

}).listen(8000); 


function dialOut() {
  console.log("Clicked call button");
  $.get( "https://api.tropo.com/1.0/sessions", { action: "create", token: "46714e724149674865704d6d7565464b524a7253534d4169647969425749646477536853796178674d6c6c48", name: "Morty", msg: "Sometimes+science+is+more+art+than+fiction" } );
}

