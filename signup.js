$(document).ready(function () {
  const APIKEY = "63de3c9d3bc6b255ed0c4647";

  $("#account-submit").on("click", function (e) {
    //prevent default action of the button 
    e.preventDefault();

    let name = $("#name").val();
    let contactEmail = $("#contact-email").val();
    let studentID = $("#student-id").val();
    let password = $("#password").val();

    // Data validation
    if (name === "" || contactEmail === "" || studentID === "" || password === "") {
      // Display an error message to the user
      $("#error-message").text("Please fill in all the fields.");
      return;
    }

    var jsondata = {
      "name": name,
      "email": contactEmail,
      "studentid": studentID,
      "password": password,
    };

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
    
    $.ajax(settings)
    .done(function(response) {
      console.log(response);
      $("#account-submit").prop("disabled", false);
      $("#success-message").text("Account Created!");

    })
    .fail(function(response) {
      console.log(response);
      $("#error-message").text("Invalid Email");
  });

    
  });
});