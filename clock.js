setInterval(setClock, 1000);
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(hourHand, hoursRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(secondHand, secondsRatio);
}

function setRotation(ele, rotationRatio) {
    ele.style.setProperty('--rotation', rotationRatio * 360)

}
// const x=new Date();
// var date=x.getDate()+"-"+(x.getMonth()+1)+"-"+x.getFullYear();
// document.getElementById("date").innerHTML=date;