 const lang = navigator.language;
        let date = new Date();
        let month= date.getMonth();
        let m1=document.querySelector(".month");
        let monthName=date.toLocaleString(lang,{month:"long"});
        m1.innerHTML=monthName;
        let day=date.getDay();
        let d1=document.querySelector(".day");
        let dateName=date.toLocaleString(lang,{weekday:"long"});
        d1.innerHTML=dateName;
        let dat=document.querySelector(".date");
        let todaydate=date.getDate();
        dat.innerHTML=todaydate;
        let y1=date.getFullYear();
        let year=document.querySelector(".year").innerHTML=y1;
