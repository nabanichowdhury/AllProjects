function clickHere(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}
function loadUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data=>console.log(userName(data)))
}
function userName(data){
    const ul=document.getElementById("user-name");
    for(const user of data){
        console.log(user)
        const li=document.createElement("li");
        li.innerText=user.name;
        ul.appendChild(li);

    }

}
