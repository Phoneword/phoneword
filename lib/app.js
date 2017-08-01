document.getElementById("dialOut").addEventListener ("click", dialOut, false);


// should this be a GET?
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
    xhr.send("action=create&token=474c4b6e6b6c6f5942586c4b456269505649685153724d4674756550764f644f5149647a63424b644664766f&numbertodial=12088208595&customername=Morty&msg=Sometimes+science+is+more+art+than+fiction"); 
    //jquery ajax to prevent from refreshing -- need to impleent form submit
    // $('.formrelright').submit(function(event) {
    //     event.preventDefault();

    //     $.ajax({
    //         url: url,
    //         type: 'POST',
    //         data: $(this).serialize(),
    //         success: function(data) {
    //             // Whatever you want
    //         }
    //     });
    // });
}

