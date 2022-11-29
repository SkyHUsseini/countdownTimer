const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newBeginning = "1 Sep 2023";

const countdown = function () {
  const currentDate = new Date();
  const newDate = new Date(newBeginning);

  //convert ms to sec
  const totalSeconds = (newDate - currentDate) / 1000;

  //convert sec to days
  const days = Math.floor(totalSeconds / 3600 / 24);

  //sec to hours
  const hours = Math.floor(totalSeconds / 3600) % 24;

  //sec to min
  const minutes = Math.floor(totalSeconds / 60) % 60;

  //secs remaining
  const seconds = Math.floor(totalSeconds) % 60;

  //   console.log(days, hours, minutes, seconds);
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
};

countdown();

setInterval(countdown, 1000);
