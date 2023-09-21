"use strict";

//Query Selectors:
const checkButton = document.querySelector(".check");
const guessInput = document.querySelector(".guess");
const againButton = document.querySelector(".again");
const messagePara = document.querySelector(".message");
const secretNumberDiv = document.querySelector(".number");
const body = document.querySelector("body");
const scoreSpan = document.querySelector(".score");
const highScoreSpan = document.querySelector(".highscore");
const heading = document.querySelector("h1");

//Other Variables:
let secretNumber,
  score = 5,
  highScore = 0;

//Logic Begins:
secretNumberGenerator();

//Using Function Expression (Under check button click event listener):
checkButton.addEventListener("click", function () {
  heading.textContent = "Guess This👇🏻 Number!";
  //Checking if input field is not null (through Boolean Falsy Values)
  if (guessInput.value) {
    //Logic to Check whether user guessNumber is correct or not:
    winOrNot(Number(guessInput.value));
  } else {
    //Number is fall under Falsy value (0, "", null, undefined, NaN):
    messagePara.textContent = "⛔️ No Number!";
  }
});

//Using Arrow Function (Under Again button click listener):
againButton.addEventListener("click", () => {
  //Resetting the Game:
  guessInput.value = "";
  score = 5;
  scoreSpan.textContent = score;
  messagePara.textContent = "Let's Start guessing...";
  secretNumberDiv.textContent = "?";
  secretNumberGenerator();
  checkButton.disabled = false;
  guessInput.disabled = false;
  body.style.backgroundColor = "#222";
});

//Just for Fun:
secretNumberDiv.addEventListener("click", function () {
  if (secretNumberDiv.textContent === "?") {
    messagePara.textContent = "Haha, nice try, but you can't outsmart me!🤦🏼‍♂️";
    heading.textContent = `Don't Cheat😤 Guess The Number!`;
  }
});

//Function Declaration (To Generate Secret Number):
function secretNumberGenerator() {
  // secretNumber = Math.trunc(Math.random() * 20) + 1;
  secretNumber = Math.trunc(Math.random() * 21); //It'll give 0 as a final result but abve not as adding 1 explicitly
}

//Function Declaration (To check whether the guess number is equal to secret number or not):
function winOrNot(guessValue) {
  if (guessValue === secretNumber) {
    //Changing body background color after win:
    body.style.backgroundColor = "#60b347";
    messagePara.textContent = "🎉Congratulations On Winning the Game🏆";
    secretNumberDiv.textContent = secretNumber;

    //Disabling the check and input buttons after win:
    checkButton.disabled = true;
    guessInput.disabled = true;

    //Checkig for HighScore:
    if (score > highScore) {
      highScore = score;
      highScoreSpan.textContent = highScore;
    }
  } else {
    score--;
    scoreSpan.textContent = score;
    if (score === 0) {
      onLossing();
    } else if (guessValue < secretNumber) {
      messagePara.textContent = "🤣Your Number is as low as your thinking is🤣";
    } else {
      messagePara.textContent = "The Number is Big, When you will be?🤭";
    }
  }
}

//Function on Loosing the game:
function onLossing() {
  //Setting score to 0
  scoreSpan.textContent = 0;
  guessInput.disabled = true;

  //Changing body background color after loose:
  body.style.backgroundColor = "rgb(216, 37, 37)";

  messagePara.textContent = "Better Luck Next Time🤙🏻";
  secretNumberDiv.textContent = secretNumber;

  //Disabling the check button after loose:
  checkButton.disabled = true;
}
