let pad = (value) => value > 9 ? value : `0${value}`;
let date = document.getElementById('dateText');
let time = document.getElementById('timeText');
window.setInterval(() => {
  let now = new Date();
  date.textContent = `${pad(now.getYear()+1900)}/${pad(now.getMonth()+1)}/${pad(now.getDate())}`;
  time.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}, 500);
