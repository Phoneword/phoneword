//Tropo section
//Init a server that is able to communicate with tropo services to
//call/text a given phonenumber
//When the server is running, the service can be started on the tropo site, regenerating a new secret token
//and then requesting the url
var http = require('http');
var tropo_webapi = require('tropo-webapi');
var url = require('url');

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