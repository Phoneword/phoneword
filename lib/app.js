document.getElementById("dialOut").addEventListener ("click", dialOut, false);

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
    xhr.send("action=create&token=4566684e794663416355684e4e57715a6a59486c4250446a4b68756b614357715741734849686b6155466a47 &numbertodial=12088208595&customername=Morty&msg=Sometimes+science+is+more+art+than+fiction"); 
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

