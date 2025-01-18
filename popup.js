let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;


const timeDisplay = document.getElementById("time-display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");


function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;


  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return hours + ":" + minutes + ":" + seconds;
}


function updateDisplay() {
  let now = Date.now();
  elapsedTime = now - startTime;
  timeDisplay.textContent = formatTime(elapsedTime);
}


startButton.addEventListener("click", function () {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime; 
    timer = setInterval(updateDisplay, 100); 
  }
});

stopButton.addEventListener("click", function () {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer); 
  }
});


resetButton.addEventListener("click", function () {
  isRunning = false;
  clearInterval(timer); 
  elapsedTime = 0; 
  timeDisplay.textContent = "00:00:00"; 
});
