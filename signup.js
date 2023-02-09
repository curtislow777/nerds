//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
  //what kind of interface we want at the start 
  const APIKEY = "63de3c9d3bc6b255ed0c4647";


  //[STEP 1]: Create our submit form listener
  $("#account-submit").on("click", function (e) {
    //prevent default action of the button 
    e.preventDefault();
    console.log('button pressed')

    //[STEP 2]: let's retrieve form data
    //for now we assume all information is valid
    //you are to do your own data validation
    let name = $("#name").val();
    let contactEmail = $("#contact-email").val();
    let studentID = $("#student-id").val();
    let password = $("#password").val();
    console.log(name)



    //[STEP 3]: get form values when user clicks on send
    //Adapted from restdb api
    var jsondata = {
      "name": name,
      "email": contactEmail,
      "studentid": studentID,
      "password": password,
    };

    console.log(jsondata)

    //[STEP 4]: Create our AJAX settings. Take note of API key
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://nerdge-d48f.restdb.io/rest/account",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "63de3c9d3bc6b255ed0c4647",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
    }
    $.ajax(settings).done(function(response) {
      console.log(response);

      $("#account-submit").prop("disabled", false);
    });
  })
    
    

}
)

 
