//window.onload = function () {
let hour, min, sec;
hour = 0;
min = 0;
sec = 0;

function incTime() {
  sec = sec + 1;
  if (sec === 60) {
    sec = 0;
    if (min === 59) {
      if (hour == 23) {
        hour = 0;
      } else {
        hour = hour + 1;
      }
      min = 0;
    } else {
      min = min + 1;
    }
  }
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
  console.log(hour + ":" + min + ":" + sec);
}

// for (let i = 0; i < 1000; i++) {
//   incTime(hour, min, sec);
// }

setInterval(incTime, 1000);
//};
