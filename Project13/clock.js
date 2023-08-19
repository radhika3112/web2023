setInterval(()=>{
let d = new Date();
let h = document.getElementsByClassName("hours")[0];
h.innerHTML=d.getHours();

let m = document.getElementsByClassName("min")[0];
m.innerHTML=d.getMinutes();
let c = document.getElementsByClassName("sec")[0];
c.innerHTML=d.getSeconds();
},1000);
