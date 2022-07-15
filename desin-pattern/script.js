import { fetchData } from './vm/data.js'

var btn = document.getElementById("btnFetch")
var commentList = document.getElementById("commentList")


btn.addEventListener("click", function(event){    
    fetchData()
    .then(function(resp){
       resp.forEach(function(comment){
        var li = document.createElement("li")
        li.innerHTML = comment.id + " " + comment.name
        commentList.appendChild(li) 
       })
    }).catch(console.log)

})