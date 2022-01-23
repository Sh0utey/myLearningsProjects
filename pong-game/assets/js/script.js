const gameBoard = document.getElementById("game-board");
const racketOne = document.getElementById("racket-one");
const scorePlayer1 = document.getElementById("score-player1");
const racketTwo = document.getElementById("racket-two");
const scorePlayer2 = document.getElementById("score-player2");
const ball = document.getElementById("ball");
const informationsBox = document.getElementById("informations-box");
let racketOnePosition = 50;
let racketTwoPosition = 50;

//init
const init = (racket) => {
  racket.style.setProperty("--top", "50%");
};

const moveUpRacketOne = () => {
  racketOne.style.setProperty("--top", racketOnePosition-- - 1 + "%");
};

const moveDownRacketOne = () => {
  racketOne.style.setProperty("--top", racketOnePosition++ + 1 + "%");
};

const moveUpRacketTwo = () => {
  racketTwo.style.setProperty("--top", racketTwoPosition-- - 1 + "%");
};

const moveDownRacketTwo = () => {
  racketTwo.style.setProperty("--top", racketTwoPosition++ + 1 + "%");
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

init(racketOne);
init(racketTwo);
