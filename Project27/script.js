let p=document.querySelector("p");
let btn=document.getElementsByClassName("ctbtn")[0];
let count=0;
btn.addEventListener("click",()=>{
    count++;
    p.innerHTML=count;
})
let save = document.querySelector(".save");
save.addEventListener("click",()=>{
   let h= document.querySelector("h3");
   let co="People count is "+count;
   h.innerHTML=co;

})
