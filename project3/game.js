let user=prompt("Enter s , w , g");
console.log(user);
let cpu=Math.floor(Math.random()*2)+1;

let cpu1=["s","w","g"][cpu];
console.log(cpu1);
const match=((cpu1,user)=>{
   if(cpu1===user)
   {
    return "no winner";
   }
   else if(cpu1==="s" && user==="w")
   {
    return "Snake wins";
   }
   else if(cpu==="w" && user==="g")
   {
    return "water wins";
   }
});
let result= match(cpu1,user);
console.log("The winner is:" +result);
