const btn_start  = document.getElementById('start');
const btn_stop = document.getElementById('stop');
const btn_reset = document.getElementById('reset');
const stopwatch = document.querySelector(".stopwatch");

let second = 0;
let minute = 0;
let hour = 0;
stopwatch.textContent = "00:00:00";

function startTime() {
  second++;
  if(second == 60){
    second = 0;
    minute++;
  }
  if(minute == 60){
    minute = 0;
    hour++;
  }
  let secondLen = formatNum(second);
  let minuteLen = formatNum(minute)
  let hourLen = formatNum(hour)
  stopwatch.textContent = `${hourLen}:${minuteLen}:${secondLen}`;
}

function formatNum(num){
  stringNum = num.toString();
  if(stringNum.length == 1){
    return "0" + stringNum;
  } else {
    return stringNum;
  }
}

function reset(){
  second = 0;
  minute = 0;
  hour = 0;
  clearInterval(start);
  stopwatch.textContent = "00:00:00";
}

let start;

btn_start.addEventListener('click', () => {
  start = setInterval(startTime, 1000)
  btn_start.disabled = true;
})

btn_stop.addEventListener('click', () => {
  clearInterval(start)
  btn_start.disabled = false;
})

btn_reset.addEventListener('click', () => {
  reset();
  btn_start.disabled = false;
})
