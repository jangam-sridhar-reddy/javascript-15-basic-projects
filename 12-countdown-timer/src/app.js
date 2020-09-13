const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveAway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2020, 9, 14, 11, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
let hours = futureDate.getHours();
const minutes = (futureDate.getMinutes() < 10 ) ? "0" + futureDate.getMinutes() : futureDate.getMinutes();
const weekday = weekdays[futureDate.getDay()];
let amOrPm = (hours >= 12) ? "pm" : "am";
hours = hours % 12;
hours = hours ? hours : 12;

giveAway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}${amOrPm}`;

// future time in  milliseconds

const futureTime = futureDate.getTime();


function remainingTime() {
  const todayTime = new Date().getTime();
  const totalTime = futureTime - todayTime;

  // 1sec = 1000ms
  // 1min = 60sec
  // 1hr = 60min
  // 1day = 24hrs
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinutes = 60 * 1000;
  const oneSecond = 1000;

  let days = totalTime / oneDay;
  days = Math.floor(days);
  let hours = (totalTime % oneDay) / oneHour;
  hours = Math.floor(hours);
  let minutes = (totalTime % oneHour) / oneMinutes;
  minutes = Math.floor(minutes);
  let seconds = (totalTime % oneMinutes) / oneSecond;
  seconds = Math.floor(seconds);

  const remainingDays = [days, hours, minutes, seconds];

  function format(item){
    if(item < 10){
      return item = `0${item}`;
    }
    return item;
  }

  items.forEach(function(item, index){
    item.innerHTML = format(remainingDays[index]);
  });

  

  if(totalTime < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry,  this giveaway has expired</h4>`
  }

}

let countdown = setInterval(remainingTime, 1000);

remainingTime();

