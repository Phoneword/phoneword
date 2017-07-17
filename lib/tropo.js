
var server = http.createServer(function (request, response) {
	
    var tropo = new TropoWebAPI();
    
    tropo.call("+14155550100");
    tropo.say("Tag, you're it!");
	
    response.end(TropoJSON(tropo));

}).listen(8000); 