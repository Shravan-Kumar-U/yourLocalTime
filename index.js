const clock = document.getElementById('clock');




setInterval(()=>{
    let date = new Date();

    clock.innerHTML=date.toLocaleTimeString();
},10000)  //10000 for 1 sec interval , 20000 for 2 sec interval and so on....