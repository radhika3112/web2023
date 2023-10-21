let txt=document.querySelector(".text")

txt.innerHTML=txt.textContent.replace(/\s/g,"<span>$&</span>");

let element = document.querySelectorAll("span");
for(let i=0;i<element.length;i++)
{
    element[i].style.transform="rotate("+i*18+"deg)"
}

document.addEventListener("mousemove",function(e){
    txt.style.left=e.pageX+"px";
    txt.style.top=e.pageY+"px";
    txt.style.transform=`rotate(${e.pageX / 2}deg)
    rotate(${e.pageY / -2}deg)`
})
