var Web3 = require('web3');
var http = require('http');
var tropo_webapi = require('tropo-webapi');
var url = require('url');

 document.getElementById("dialOut").addEventListener ("click", dialOut, false);

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
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://api.tropo.com/1.0/sessions', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {//Call a function when the state changes.
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            // Request finished. Do processing here.
        }
    }
    xhr.send("action=create&token=46714e724149674865704d6d7565464b524a7253534d4169647969425749646477536853796178674d6c6c48&numbertodial=12088208595&customername=Morty&msg=Sometimes+science+is+more+art+than+fiction"); 

//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() { 
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", theUrl, true); // true for asynchronous 
//     xmlHttp.send(null);

//   $.get( "https://api.tropo.com/1.0/sessions", { action: "create", token: "46714e724149674865704d6d7565464b524a7253534d4169647969425749646477536853796178674d6c6c48", name: "Morty", msg: "Sometimes+science+is+more+art+than+fiction" } );
}

