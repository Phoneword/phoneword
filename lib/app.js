const TROPO_URL = "https://api.tropo.com/1.0/sessions";

//Dialer form submission that is sent to tropo server
$('#dialer').submit(function(event) {       
    event.preventDefault();
    if (typeof web3 !== 'undefined'){ 
        /*
            tropo request structure:
                url: "https://api.tropo.com/1.0/sessions",
                action: "create",
                token: "474c4b6e6b6c6f5942586c4b456269505649685153724d4674756550764f644f5149647a63424b644664766f",
                numberToDial: "15555555555",
                customerName: "Morty",
                msg: "Sometimes science is more art than fiction"
        */
        
        
                                sendEth(lookupRegistry($('[name="numbertodial"]').val()), 200, $(this).serialize());
                           
    }
    else alert('No web3? You should consider trying MetaMask!');
});

function sendEth(addr, amount, formData){
    console.log(web3.eth.sendTransaction({to: addr, value: amount, from: web3.eth.accounts[0]}, function(error, result){
        if(!error){
            $('[name="msg"]').val($('[name="msg"]').val() + " Transaction ID: " + result);
            $.ajax({
                method: "POST",
                url: TROPO_URL,
                beforeSend: function (xhr){
                    
                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                },
                data: formData.toString() + " Transaction ID: " + result.toString(),
                success: function(data) {
                    console.log("Tropo request succesfully sent");
                }
            });
            console.log(result);
        }
        else
            console.log(error);
    }));
}
function lookupRegistry(phoneNumber){
    console.log(phoneNumber);
    if (phoneNumber == 12088208595) 
        return "0x6D3eFF347c70268E7612F4b0cED7864d5ad068d0";
    else{
        alert("No eth address registered for this number. Defaulting to a demo address: 0x6D3eFF347c70268E7612F4b0cED7864d5ad068d0.");
        return "0x6D3eFF347c70268E7612F4b0cED7864d5ad068d0";
    } 
}