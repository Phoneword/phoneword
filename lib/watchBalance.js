
function watchBalance() {

    var balance = web3.eth.getBalance("0x8b642A377549E5355b650e727c5e3523a4084839",
        function(err,res){
            console.log(res.toNumber());
        }
    );

}