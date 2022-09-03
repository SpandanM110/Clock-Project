const hourE1 = document.querySelector(".hour") ;
const minuteE1 = document.querySelector(".minute") ;
const secondE1 = document. querySelector(".second") ;



function updateclock(){
    const current_date = new Date();
    setTimeout(updateclock,1000);
    const hour = current_date.getHours();
    const minute = current_date.getMinutes();
    const second = current_date.getSeconds();
    
    const hourDeg = (hour / 12) *360 ;
    hourE1.style.transform = `rotate(${hourDeg}deg)`;
    
    const minuteDeg = (minute / 60) *360 ;
    minuteE1.style.transform = `rotate(${minuteDeg}deg)`;
    
    const secondDeg = (second / 60) *360 ;
    secondE1.style.transform = `rotate(${secondDeg}deg)`;

   console.log(hour,minute,second);
}

setInterval(updateclock, 1000);