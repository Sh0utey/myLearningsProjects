const action = document.querySelector("#action");
const result = document.querySelector("#result");
action.addEventListener("click", play);
let score = 0;
function play() {
  // le jeu
  score++;
  result.innerText = score;
  // l'étape suivante
  if (score < 3) {
    gameStop();
  } else {
    gameOver();
  }
}
function gameStop() {
  action.removeEventListener("click", play);
  action.disabled = true; // visuel
  // ton timer pour reactiver
  setTimeout(() => {
    action.addEventListener("click", play);
    action.disabled = false; // visuel
  }, 5 * 1000);
}

function gameOver() {
  action.removeEventListener("click", play);
  result.innerText = "Bravo " + score;
}
