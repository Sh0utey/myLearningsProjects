const gameBoard = document.getElementById("game-board");
const racketOne = document.getElementById("racket-one");
const scorePlayer1 = document.getElementById("score-player1");
const racketTwo = document.getElementById("racket-two");
const scorePlayer2 = document.getElementById("score-player2");
const ball = document.getElementById("ball");
const informationsBox = document.getElementById("informations-box");
var counterRacketOne = 50;
var counterRacketTwo = 50;
let racketspeed = 5;

const moveBall = () => {};

const init = () => {
  racketOne.style.setProperty("--top", "50%");
  racketTwo.style.setProperty("--top", "50%");
  ball.style.display = "none";

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      ball.style.setProperty("--top", Math.random() * 100 + "%");
      ball.style.display = "block";
      moveBall();
    }
  });
};

const moveUpRacketOne = () => {
  if (counterRacketOne > 10) {
    counterRacketOne = counterRacketOne - racketspeed;
    racketOne.style.setProperty("--top", counterRacketOne + "%");
  } else {
    racketOne.style.setProperty("--top", counterRacketOne + "%");
  }
};

const moveDownRacketOne = () => {
  if (counterRacketOne < 90) {
    counterRacketOne = counterRacketOne + racketspeed;
    racketOne.style.setProperty("--top", counterRacketOne + "%");
  } else {
    racketOne.style.setProperty("--top", counterRacketOne + "%");
  }
};

const moveUpRacketTwo = () => {
  if (counterRacketTwo > 10) {
    counterRacketTwo = counterRacketTwo - racketspeed;
    racketTwo.style.setProperty("--top", counterRacketTwo + "%");
  } else {
    racketTwo.style.setProperty("--top", counterRacketTwo + "%");
  }
};

const moveDownRacketTwo = () => {
  if (counterRacketTwo < 90) {
    counterRacketTwo = counterRacketTwo + racketspeed;
    racketTwo.style.setProperty("--top", counterRacketTwo + "%");
  } else {
    racketTwo.style.setProperty("--top", counterRacketTwo + "%");
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "z") {
    moveUpRacketOne();
  } else if (e.key === "s") {
    moveDownRacketOne();
  } else if (e.key === "ArrowUp") {
    moveUpRacketTwo();
  } else if (e.key === "ArrowDown") {
    moveDownRacketTwo();
  }
});

init();
