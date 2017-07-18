var http = require('http');
var tropo_webapi = require('tropo-webapi');

var server = http.createServer(function (request, response) {
	
    var tropo = new TropoWebAPI();
    
    tropo.call("+6022284486");
    tropo.say("Tag, you're it!");
	
    response.end(TropoJSON(tropo));

}).listen(8000); 
console.log(server);