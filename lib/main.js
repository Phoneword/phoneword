var Web3 = require('web3');
 
//Web3js section
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    console.log('No web3? You should consider trying MetaMask!')
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider());
}




