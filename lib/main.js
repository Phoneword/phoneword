var Web3 = require('web3');
window.onload = function(){    
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
    var version = web3.version.api;
    console.log(version);
}