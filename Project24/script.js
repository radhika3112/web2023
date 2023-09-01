
        let arr=["😊","😍","😘","😁","😒","😢","🤣"];
        let randemo=arr[Math.floor(Math.random()*arr.length)];
        let btn=document.querySelector("button");
        btn.addEventListener("click",()=>{
            let p=document.querySelector(".para");
            p.innerHTML=randemo;
        })
    
