const emoji=["😍","😍","💖","💖","😜","😜","😒","😒","✌","✌","🤷‍♀️","🤷‍♀️","🎂","🎂","🤑","🤑"];
var shuffle=emoji.sort(()=>(Math.random () > .5) ? 2 : -1);
for(var i=0;i<emoji.length;i++)
{
    let box=document.createElement('div')
    box.className='item';
    box.innerHTML=shuffle[i]
    box.onclick=function()
    {
        this.classList.add('boxOpen')
    }
    document.querySelector('.game').appendChild(box);
}
