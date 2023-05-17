let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
let date = document.getElementById("date")
let day = document.getElementById("day")
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function clock(){
    hour.textContent = new Date().getHours()
    minute.textContent = new Date().getMinutes()
    second.textContent = new Date().getSeconds()
    day.textContent = new Date().toLocaleDateString('en-us', { weekday:"long"})
    date.textContent = new Date().toLocaleDateString('en-us', {month:"long", day:"numeric"});
    setTimeout(()=>{
        clock()
    }, 1000)
}

clock()


