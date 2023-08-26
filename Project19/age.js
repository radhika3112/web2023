 function urAge()
        {
        let today= new Date();
        let month= today.getMonth()+1;
        let date = today.getDate();
        let year = today.getFullYear();
        let todaysDate=month+"/"+date+"/"+year;
        let ip = document.querySelector("input");
        let birthdate = new Date(ip.value);
        let birth = birthdate.getFullYear();
        let yourAge = year-birth;
        let age = document.querySelector(".age");
        age.innerHTML="Your age is"+" "+yourAge;
        }
       
