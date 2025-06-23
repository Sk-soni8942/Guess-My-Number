"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = " 🚫 No number !";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "👆too high";
    currentScore--;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "👇too low";
    currentScore--;
  } else if (secretNumber === guess) {
    document.querySelector(".message").textContent = "😘 Correct Number !";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "20rem";
    document.querySelector(".number").textContent = secretNumber;
    //const ans = currentScore;
    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  if (currentScore <= -1) {
    document.querySelector(".message").textContent = "🤦‍♀️ YOU LOST !";
  } else {
    document.querySelector(".score").textContent = currentScore;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = 20;
  currentScore = 20;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
});
