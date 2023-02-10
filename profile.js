var post= document.getElementById("post");
post.addEventListener("click",function(e){
    e.preventDefault();
    console.log('coment button pressed');

    var userComment=document.getElementById("comment-box").value;
    console.log(userComment)

    var text= document.createTextNode(userComment);
    console.log(text)

    var newComment = document.getElementById("new-comment");
    console.log(newComment)

    newComment.appendChild(userComment)
    


})