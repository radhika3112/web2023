setInterval(()=>{
    let days = document.getElementsByClassName("day")[0];
let hr= document.getElementsByClassName("hour")[0];
let mins=document.getElementsByClassName("min")[0];
let secs=document.getElementsByClassName("sec")[0];

   let current=new Date();
   days.innerHTML=current.getDay();
   hr.innerHTML=current.getHours();
   mins.innerHTML=current.getMinutes();
   secs.innerHTML=current.getSeconds();
},1000);
