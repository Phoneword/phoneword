
function watchBalance() {

    var balance = web3.eth.getBalance("",
        function(err,res){
            console.log(res.toNumber());
        }
    );

}