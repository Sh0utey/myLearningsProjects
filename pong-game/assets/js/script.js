const gameBoard = document.getElementById("game-board");
const racketOne = document.getElementById("racket-one");
const scorePlayer1 = document.getElementById("score-player1");
const racketTwo = document.getElementById("racket-two");
const scorePlayer2 = document.getElementById("score-player2");
const ball = document.getElementById("ball");
const informationsBox = document.getElementById("informations-box");
let counter = 50;

//init
const init = (racket) => {
  racket.style.setProperty("--top", "50%");
};

const moveUp = (racket) => {
  racket.style.setProperty("--top", counter-- - 1 + "%");
};

const moveDown = (racket) => {
  racket.style.setProperty("--top", counter++ + 1 + "%");
};

document.addEventListener("keydown", (e) => {
  if (e.key === "z") {
    moveUp(racketOne);
  } else if (e.key === "s") {
    moveDown(racketOne);
  } else if (e.key === "ArrowUp") {
    moveUp(racketTwo);
  } else if (e.key === "ArrowDown") {
    moveDown(racketTwo);
  }
});

init(racketOne);
init(racketTwo);
