const password = document.getElementById("password");
const leng = 12;
const uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const num="0123456789";
const symbol ="#$@_*=";
const chars = uppercase+ lowercase+ num+ symbol;
let btn = document.querySelector(".button");
btn.addEventListener("click",()=>{
    let pass="";
    pass += uppercase[Math.floor(Math.random() * uppercase.length)];
    pass += lowercase[Math.floor(Math.random() * lowercase.length)];
    pass += num[Math.floor(Math.random() * num.length)];
    pass += symbol[Math.floor(Math.random() * symbol.length)];
    while(leng > pass.length)
    {
        pass += chars[Math.floor(Math.random() * chars.length)];
    }
    password.value=pass;
})

function copypass()
{
   password.select();
   document.execCommand("copy");
}
