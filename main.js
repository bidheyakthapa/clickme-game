const myButton = document.getElementById("myButton");
const start = document.getElementById("start");
const level = document.querySelectorAll(".level");
const levels = document.getElementById("levels");
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const gameStat = document.getElementById("gamestat");

let win = 0;
let gameStarted = false;
let gameOver = false;
let highScore = 0;

// Define a function called applyTheme
function applyTheme() {
  // Remove both "light" and "dark" classes from the body element
  document.body.classList.remove("light", "dark");

  // Find the currently checked radio button with the name "theme"
  const selectedTheme = document.querySelector(
    'input[name="theme"]:checked'
  ).id;

  // Add the ID of the checked radio button as a class to the body element
  document.body.classList.add(selectedTheme);
}

// Use the forEach method to iterate over all radio buttons with the name "theme"
document.querySelectorAll('input[name="theme"]').forEach((radio) => {
  // Add an event listener to each radio button for the "change" event
  radio.addEventListener("change", applyTheme);
});

// Apply the theme immediately when the page loads
applyTheme();

document.getElementById("levelopt").addEventListener("click", function () {
  const cat = levels.getAttribute("aria-hidden");
  if (cat == "false") {
    levels.setAttribute("aria-hidden", "true");
  } else {
    levels.setAttribute("aria-hidden", "false");
  }
});

easy.onclick = function () {
  lvl.innerHTML = "(EASY)";
  levels.setAttribute("aria-hidden", "true");
  document.body.style.transition = "1ms";
};
medium.onclick = function () {
  lvl.innerHTML = "(MEDIUM)";
  levels.setAttribute("aria-hidden", "true");
  document.body.style.transition = "0.1ms";
};
hard.onclick = function () {
  lvl.innerHTML = "(HARD)";
  levels.setAttribute("aria-hidden", "true");
  document.body.style.transition = "0.01ms";
};

myButton.addEventListener("mouseover", function () {
  if (gameStarted) {
    let x = Math.floor(Math.random() * 70);
    let y = Math.floor(Math.random() * 90);
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
