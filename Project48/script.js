function rain()
{
    let cloud=document.querySelector(".cloud");
    let e=document.createElement("div")
    let left=Math.floor(Math.random()* 310)

    e.classList.add("drop")
    cloud.appendChild(e)
    e.style.left=left + "px";
}

setTimeout(function()
{
    cloud.removeChild(e)
},2000)

setInterval(function(){
    rain()
},2000)
