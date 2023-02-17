function postComment() {
    //Get comment
    var userComment = document.getElementById("comment-box").value;
  
    var html = '<div class="list">' +
      '<div class="user">' +
      '<div class="user-image"><img src="images/avatar-2.png"></div>' +
      '<div class="user-name">' +
      '<div class="name">Tom Nook</div>' +
      '<div class="day">1 second ago</div>' +
      '</div>' +
      '</div>' +
      '<div id="new-comment">' + userComment + '</div>' +
      '</div>';
  
  
    var template = document.getElementsByTagName("template")[0];
    template.insertAdjacentHTML("afterend", html);
  
    //reset the comment box
    document.getElementById("comment-box").value = "";
  }
  
  var post = document.getElementById("post");

  post.addEventListener("click", function(e) {
    e.preventDefault();
    postComment()

  })