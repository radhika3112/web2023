let password=document.getElementById("password")
let toggle=document.getElementById("toggle")

toggle.addEventListener("click",()=>{
    if(password.type==="password")
    {
        password.setAttribute("type","text")
    }
    else
    {
        password.setAttribute("type","password")
    }
})
