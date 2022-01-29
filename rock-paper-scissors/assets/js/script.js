//USER DECLARATION
const userChoices = document.querySelectorAll(".user-options > *");
const userOptions = document.querySelector(".user-option");
let userChoice;

//COMPUTER DECLARATION
const cpuChoices = document.querySelectorAll(".cpu-options > *");
const cpuOptions = document.querySelector(".cpu-options");
let randomNumber;
let computerChoice;

//-------------COMPUTER-------------//
const randomComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  computerChoice = cpuChoices[randomNumber].className;
  cpuOptions.innerHTML = "";
};

const lauchGame = () => {
  userChoices.forEach((userOption) => {
    userOption.addEventListener("click", () => {
      randomComputerChoice();
      userChoice = userOption.className;

      if (userChoice === computerChoice) {
        console.log("égalité");
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        console.log("c'est gagné");
      } else {
        console.log("c'est perdu");
      }
    });
  });
};

lauchGame();
