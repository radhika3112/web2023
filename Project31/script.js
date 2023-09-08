let arr=[];
let ip=document.getElementById("inp");
let ul=document.getElementById("ulem");
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    arr.push(ip.value);
    ip.value="";
     shop();
     
})

function shop(){
    let list="";
    for(let i=0;i<arr.length;i++)
    {
        list+="<li>"+arr[i]+"</li>";
    }
    ul.innerHTML=list;
}
