//[STEP 1]: Create our submit form listener for the login form
$("#login-submit").on("click", function (e) {
  //prevent default action of the button
  e.preventDefault();
  console.log('login button pressed')
  
  //[STEP 2]: let's retrieve form data
  //for now we assume all information is valid
  //you are to do your own data validation
  let email = $("#login-email").val();
  let password = $("#login-password").val();
  console.log("Email", email);
  console.log("Password", password);
  
  //[STEP 3]: Create our AJAX settings to retrieve the account from RESTDB based on the entered email
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://nerdge-d48f.restdb.io/rest/account",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "63de3c9d3bc6b255ed0c4647",
      "cache-control": "no-cache"
    },
    "processData": false,
  }
  $.ajax(settings).done(function(response) {
    console.log("Response of matched data is", response);
    
    //[STEP 4]: Check if the retrieved account exists and the password matches
    if (response.length > 0 && response[0].password === password) {
      // Login successful, redirect or perform other desired action
      console.log("Login successful");
    } else {
      // Login failed, display error message or perform other desired action
      console.error("Login failed, email or password incorrect");
    }
  });
  })