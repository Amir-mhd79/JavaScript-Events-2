let button=document.querySelectorAll("button")
button.forEach((elem)=>{
    elem.addEventListener("click",(e)=>{
        if (!e.target.parentElement.className){
            e.target.parentElement.className=(e.target.innerText.toLowerCase())
        }else{
            e.target.parentElement.className=""
        }
    })
})