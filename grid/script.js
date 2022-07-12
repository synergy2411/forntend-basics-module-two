var iconList = document.querySelectorAll(".icon")

iconList.forEach(function(icon){
    icon.addEventListener("click", function(event){
        var divEl =  event.target.closest(".item")
        if(divEl.classList.contains("open")){
            divEl.classList.remove("open")
        }else{
            divEl.classList.add("open")
        }
    })
})