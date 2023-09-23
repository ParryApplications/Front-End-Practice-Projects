"use strict";

//Element Constants:
const butnNewGame = document.querySelector(".btn--new");
const butnRoll = document.querySelector(".btn--roll");
const butnHold = document.querySelector(".btn--hold");
const imgDice = document.querySelector(".dice");
const paraCurrentScore = document.querySelector(".current-score");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const totalScore0 = document.getElementById("score--0");
const totalScore1 = document.getElementById("score--1");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");

let score;
let currentScore;
let playerActive;
const ScoreToWinTheGame = 10;
const winningTrophy = " Wins🏆";

init();

//Game Initialization:
function init() {
  //Reset the game:
  butnHold.disabled = false;
  butnRoll.disabled = false;
  currentScore = 0;
  score = [0, 0];
  playerActive = 0;
  imgDice.classList.add("hidden");
}

//Execute to reset the game:
function gameReset() {
  document.getElementById(`name--${playerActive}`).textContent = document
    .getElementById(`name--${playerActive}`)
    .textContent.replace(winningTrophy, "");

  //Reset the game:
  init();

  //Setting the values:
  totalScore0.textContent = score[0];
  totalScore1.textContent = score[1];
  currentScore0.textContent = currentScore;
  currentScore1.textContent = currentScore;
  player0.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--winner");
  player1.classList.remove("player--active");
}

butnHold.addEventListener("click", function () {
  //Add currentScore to the total score:
  score[playerActive] += currentScore;
  document.getElementById(`score--${playerActive}`).textContent =
    score[playerActive];

  //Check if score >= ScoreToWinTheGame, to win:
  if (score[playerActive] >= ScoreToWinTheGame) {
    //Player Wins:
    document
      .querySelector(`.player--${playerActive}`)
      .classList.add("player--winner");
    document.getElementById(`name--${playerActive}`).textContent +=
      winningTrophy;

    //Pause the game:
    butnHold.disabled = true;
    butnRoll.disabled = true;
  } else {
    //Switch the player:
    playerSwitch();
  }
  //switch or win the player:
});

butnRoll.addEventListener("click", function () {
  imgDice.classList.remove("hidden");
  //Generate a Random Number lies b/w 0 to 6:
  const randomNum = Math.trunc(Math.random() * 6) + 1;

  //Show relative dice as per random number:
  imgDice.src = `dice-${randomNum}.png`;

  //Checking if randomNum === 1 or not:
  if (randomNum !== 1) {
    //Add randomNum to the current Score & Display it:
    currentScore += randomNum;
    document.getElementById(`current--${playerActive}`).textContent =
      currentScore;
  } else {
    // Make current Score as 0:
    currentScore = 0;
    document.getElementById(`current--${playerActive}`).textContent =
      currentScore;
    // & Switch the player
    playerSwitch();
  }
});

butnNewGame.addEventListener("click", function () {
  gameReset();
});

//Function Utilities:
function playerSwitch() {
  currentScore = 0;
  playerActive = playerActive === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}
