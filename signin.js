function redirectToExample() {
  window.location.href = "index.html";
}

$("#login-submit").on("click", function (e) {
  e.preventDefault();
  console.log('login button pressed');

  let email = $("#login-email").val();
  let password = $("#login-password").val();
  console.log("Email", email);
  console.log("Password", password);

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

    let accountFound = false;
    for (let i = 0; i < response.length; i++) {
      if (response[i].email === email && response[i].password === password) {
        accountFound = true;
        break;
      }
    }

    if (accountFound) {
      console.log("Login successful");
      redirectToExample();

      
    } else {
      

      var error = document.getElementById("error");
      error.classList.remove("hidden");

      console.error("Login failed, email or password incorrect");
    }
  });
})