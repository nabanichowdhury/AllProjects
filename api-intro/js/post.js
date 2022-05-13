function showPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>postDisplay(data))
}
showPosts();
function postDisplay(posts){
    console.log(posts)
    const postContainer=document.getElementById("posts");
    for(const post of posts){
        const div=document.createElement("div");
        div.innerHTML=`
        <h3>${post.title}</h3>
        <p>${post.body}</p>

        `;
        div.classList.add("post")
        postContainer.appendChild(div)
    }

}