
const tropoQuery = { 
    url: "https://api.tropo.com/1.0/sessions",
    action: "create",
    token: "474c4b6e6b6c6f5942586c4b456269505649685153724d4674756550764f644f5149647a63424b644664766f",
    numberToDial: "12088208595",
    customerName: "Morty",
    msg: "Sometimes science is more art than fiction"

}

function dialOut(tropoQuery) {
    console.log("Clicked call button");

    // $.ajax({
    //     method: "POST",
    //     url: tropoQuery.url,
    //     beforeSend: function (xhr){
    //         xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     },
    //     data: {
    //         action: tropoQuery.action, token: tropoQuery.token,
    //         numbertodial: tropoQuery.numberToDial, customername: tropoQuery.customerName,
    //         msg: tropoQuery.msg
    //     }
    // });
  
    //jquery ajax to prevent from refreshing -- need to impleent form submit
    
}
$('#dialer').submit(function(event) {
        event.preventDefault();

        $.ajax({
            method: "POST",
            url: tropoQuery.url,
            beforeSend: function (xhr){
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            },
            data: $(this).serialize(),
            success: function(data) {
                // Whatever you want
                console.log($(this).serialize());
            }
        });
    });

document.getElementById("dialOut").addEventListener ("click", () => {dialOut(tropoQuery);}, false);