let arr=["stone","paper", "scissor"];
let p1=document.getElementById("p1");
let p2=document.getElementById("p2");
p1=p1.innerHTML=arr[Math.floor(Math.random()*arr.length)];
p2=p2.innerHTML=arr[Math.floor(Math.random()*arr.length)];
let win= document.getElementById("winner");
if(p1=="stone" && p2=="paper")
{
    win.innerHTML="Winner is p2";
}
else if(p1=="stone" && p2=="scissor")
{
    win.innerHTML="Winner is p1";
}
else if(p1=="paper" && p2=="scissor")
{
    win.innerHTML="winner is p2";
}
else if(p1=="scissor" && p2=="stone")
{
    win.innerHTML="Winner is p2";
}
else if(p1=="paper" && p2=="stone")
{
    win.innerHTML="Winner is p1"
}
else{
    win.innerHTML="It is a tie";
}
