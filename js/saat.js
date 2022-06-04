let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');



setInterval(()=>{
    let date = new Date();  
    let m = date.getMinutes();
    let s = date.getSeconds();
    let h = date.getHours();
    
    second.style.transform = "rotateZ("+ (s * 6) + "deg)";
    minute.style.transform = "rotateZ("+ (m * 6 + s/10) + "deg)";
    hour.style.transform = "rotateZ("+ (h * 30 + m/2) + "deg)";
},1000)