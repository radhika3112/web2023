let box=document.querySelector(".box")
function changeColor(color)
{
   box.style.background = color;
   document.querySelector("span").forEach(function(item){
    item.classList.remove("active")
   });
   event.target.classList.add("active");
}
