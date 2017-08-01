const TROPO_URL = "https://api.tropo.com/1.0/sessions";

//Dialer form submission that is sent to tropo server
$('#dialer').submit(function(event) {
    event.preventDefault();
    /*
        tropo request structure:
            url: "https://api.tropo.com/1.0/sessions",
            action: "create",
            token: "474c4b6e6b6c6f5942586c4b456269505649685153724d4674756550764f644f5149647a63424b644664766f",
            numberToDial: "15555555555",
            customerName: "Morty",
            msg: "Sometimes science is more art than fiction"
    */
    $.ajax({
        method: "POST",
        url: TROPO_URL,
        beforeSend: function (xhr){
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        },
        data: $(this).serialize(),
        success: function(data) {
            console.log("Tropo request succesfully sent");
        }
    });
});