const myButton = document.getElementById("myButton");
const start = document.getElementById("start");
const level = document.querySelectorAll(".level");
const levels = document.getElementById("levels");
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const gameStat = document.getElementById("gamestat");
const toggleInput = document.getElementById("toggle");
const toggleButton = document.querySelector(".toggle__button");

let win = 0;
let gameStarted = false;
let gameOver = false;
let highScore = 0;

// Define a function called applyTheme
function applyTheme() {
  // Remove both "light" and "dark" classes from the body element
  document.body.classList.remove("light", "dark");

  // Add the "dark" class to the body element if the toggle is checked
  if (toggleInput.checked) {
    document.body.classList.add("light");
  } else {
    document.body.classList.add("dark");
  }
}

// Add an event listener to the toggle input for the "change" event
toggleInput.addEventListener("change", applyTheme);

document.getElementById("levelopt").addEventListener("click", function () {
  const cat = levels.getAttribute("aria-hidden");
  if (cat == "false") {
    levels.setAttribute("aria-hidden", "true");
  } else {
    levels.setAttribute("aria-hidden", "false");
  }
});

let speed;

easy.onclick = function () {
  lvl.innerHTML = "(EASY)";
  levels.setAttribute("aria-hidden", "true");
  speed = 1.75;
};
medium.onclick = function () {
  lvl.innerHTML = "(MEDIUM)";
  levels.setAttribute("aria-hidden", "true");
  speed = 1.25;
};
hard.onclick = function () {
  lvl.innerHTML = "(HARD)";
  levels.setAttribute("aria-hidden", "true");
  speed = 0.75;
};

myButton.addEventListener("mouseover", function () {
  if (gameStarted) {
    let x = Math.floor(Math.random() * 70);
    let y = Math.floor(Math.random() * 90);

    myButton.style.transition = `margin ${speed}s ease-in-out`;
    myButton.style.marginTop = x + "vh";
    myButton.style.marginLeft = y + "vh";
  }
});
myButton.addEventListener("click", function () {
  if (gameStarted) {
    win = win + 1;
    document.getElementById("winCount").innerHTML = win;
  }
});

function startCountdown() {
  let seconds = 10;
  const countdownElement = document.getElementById("countdown");

  menu.setAttribute("aria-hidden", "true");
  playing.setAttribute("aria-hidden", "false");

  start.disabled = true;
  gameStarted = true;
  const countdownInterval = setInterval(function () {
    seconds--;
    countdownElement.textContent = seconds;

    if (seconds <= 0) {
      clearInterval(countdownInterval);
      finalscore.innerHTML = win;
      myButton.style.marginTop = "0vh";
      myButton.style.marginLeft = "0vh";

      if (win > highScore) {
        highscore.innerHTML = win;
        highScore = win;
        saveData();
      }

      win = 0;
      document.getElementById("winCount").innerHTML = win;
      countdownElement.innerHTML = "10";
      start.disabled = false;
      gameStarted = false;
      playing.setAttribute("aria-hidden", "true");
      gameStat.setAttribute("aria-hidden", "false");
    }
  }, 1000);
}

statmenu.addEventListener("click", function () {
  menu.setAttribute("aria-hidden", "false");
  playing.setAttribute("aria-hidden", "true");
  gameStat.setAttribute("aria-hidden", "true");
});

restart.addEventListener("click", function () {
  gameStat.setAttribute("aria-hidden", "true");
});

function saveData() {
  localStorage.setItem("data", highScore);
}

function showData() {
  highscore.innerHTML = localStorage.getItem("data");
}

// Apply the theme immediately when the page loads
applyTheme();
showData();
