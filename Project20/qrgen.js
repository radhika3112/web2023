
let imgBx = document.getElementsByClassName("imgBx")[0];
let qrimg = document.getElementById("qrimg");
let ipval = document.getElementsByClassName("ipval")[0];

function generator()
{
    qrimg.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + ipval.value;
}
