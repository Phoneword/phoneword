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
// var server = http.createServer(function (request, response) {
	
//     var tropo = new TropoWebAPI();
   
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     var q = url.parse(request.url, true).query;
//     console.log(q);
//     var n = q.number;
//     console.log(n);
//     //16022284486
//     tropo.call(n);
//     tropo.say("Tag, you're it!");

//     response.end(TropoJSON(tropo));

// }).listen(8000); 

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
		tropo.say("OMG " + name + ", " + msg + "!");
	
		response.end(TropoJSON(tropo));
	});

}).listen(8000); 