const playerOptions = document.querySelectorAll(".player-options > *");
const playerScore = document.querySelector(".player-score");
const playerInfos = document.querySelector(".player-infos");
let playerChoice;
let playerScoreCounter = 0;
let canIPlay = true;

const computerOptions = document.querySelectorAll(".computer-options > *");
const computerScore = document.querySelector(".computer-score");
const computerInfos = document.querySelector(".computer-infos");
let computerChoice;
let computerScoreCounter = 0;
let randomComputerChoice;

const generateComputerChoice = () => {
  randomComputerChoice = Math.floor(Math.random() * 3);
  computerChoice = computerOptions[randomComputerChoice].className;
  computerOptions[randomComputerChoice].classList.add("selected-option");
};

const waitingMessage = () => {
  setTimeout(() => {
    computerInfos.textContent = "Are you ready?";
    playerInfos.textContent = "Choose an option to begin the game";
  }, 4000);
};

const infoMessage = (
  user,
  score,
  scoreCounter,
  computerMessage,
  playerMessage
) => {
  score.textContent = `${user} SCORE : ${scoreCounter}`;
  playerInfos.textContent = playerMessage;
  computerInfos.textContent = computerMessage;

  waitingMessage();
};

const askReplay = () => {
  // formulaire qui demande en combien de points
  // 1 bouton rejouer -> canIplay = true si c'est cliqué
  // div absolute
};

const lauchGame = () => {
  playerOptions.forEach((playerOption) => {
    playerOption.addEventListener("click", () => {
      if (
        canIPlay === true &&
        playerScoreCounter < 3 &&
        computerScoreCounter < 3
      ) {
        canIPlay = false;
        playerChoice = playerOption.className;
        generateComputerChoice();
        playerOption.classList.add("selected-option");

        if (playerChoice === computerChoice) {
          console.log("equality");
          computerInfos.textContent = `Equality!`;
          playerInfos.textContent = `Equality!`;
          waitingMessage();
        } else if (
          (playerChoice === "rock" && computerChoice === "scissors") ||
          (playerChoice === "paper" && computerChoice === "rock") ||
          (playerChoice === "scissors" && computerChoice === "paper")
        ) {
          console.log("player win");
          playerScoreCounter++;
          infoMessage(
            "PLAYER",
            playerScore,
            playerScoreCounter,
            `Loose!`,
            `Win!`
          );
        } else {
          console.log("player loose");
          computerScoreCounter++;
          infoMessage(
            "COMPUTER",
            computerScore,
            computerScoreCounter,
            `Win`,
            `Loose`
          );
        }
        setTimeout(() => {
          canIPlay = true;
          playerOption.classList.remove("selected-option");
          computerOptions[randomComputerChoice].classList.remove(
            "selected-option"
          );
        }, 4000);
      } else {
        console.log("c'est fini");
        canIPlay = false;
        askReplay();
      }
    });
  });
};

lauchGame();
