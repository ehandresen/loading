let timerElement = document.getElementById('timer');
let timeLeft = 30;

function countdown() {
  if (timeLeft <= 0) {
    clearTimeout(timerId);
    timerElement.innerHTML = "Time's up!";
  } else {
    timerElement.innerHTML = timeLeft;
    timeLeft--;
  }
}

let timerId = setInterval(countdown, 1000);
