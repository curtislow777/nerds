function postComment() {
    //Get comment
    var userComment = document.getElementById("comment-box").value;
  
    var html = '<div class="list">' +
                  '<div class="comment">' +
                    '<div class="user-image"><img src="./images/avatar-2.png"></div>' +
                    '<div class="user-details">' +
                      '<div class="user-name">Tom Nook</div>' +
                      '<div class="user-comment">' + userComment +'</div>' +
                    '</div>' +
                    '<div class="date">1 second ago</div>' +
                  '</div>' +
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