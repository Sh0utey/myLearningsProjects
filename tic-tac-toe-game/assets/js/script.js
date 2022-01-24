const boxes = document.querySelectorAll(".board-container div");

let player = 1;

const reset = () => {
  boxes.forEach((element) => {
    element.innerHTML = "";
  });
};

const checkWins = () => {};

for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];
  box.addEventListener("click", () => {
    if (
      player === 1 &&
      box.innerHTML.includes("cross") === false &&
      box.innerHTML.includes("round") === false
    ) {
      box.innerHTML = `<img src="#" alt="round" />`;
      box.classList.add("played");
      player = 2;
    } else if (
      player === 2 &&
      box.innerHTML.includes("cross") === false &&
      box.innerHTML.includes("round") === false
    ) {
      box.innerHTML = `<img src="#" alt="cross" />`;
      box.classList.add("played");
      player = 1;
    }
    let roundPlayerWinCombos =
      //LINE 1
      (boxes[0].innerHTML.includes("round") &&
        boxes[1].innerHTML.includes("round") &&
        boxes[2].innerHTML.includes("round")) ||
      //LINE 2
      (boxes[3].innerHTML.includes("round") &&
        boxes[4].innerHTML.includes("round") &&
        boxes[5].innerHTML.includes("round")) ||
      //LINE3
      (boxes[6].innerHTML.includes("round") &&
        boxes[7].innerHTML.includes("round") &&
        boxes[8].innerHTML.includes("round")) ||
      //COLUMN 1
      (boxes[0].innerHTML.includes("round") &&
        boxes[3].innerHTML.includes("round") &&
        boxes[6].innerHTML.includes("round")) ||
      //COLUMN 2
      (boxes[1].innerHTML.includes("round") &&
        boxes[4].innerHTML.includes("round") &&
        boxes[7].innerHTML.includes("round")) ||
      //COLUMN 3
      (boxes[2].innerHTML.includes("round") &&
        boxes[5].innerHTML.includes("round") &&
        boxes[8].innerHTML.includes("round")) ||
      //DIAGONAL 1

      (boxes[0].innerHTML.includes("round") &&
        boxes[4].innerHTML.includes("round") &&
        boxes[8].innerHTML.includes("round")) ||
      //DIAGONAL 2

      (boxes[2].innerHTML.includes("round") &&
        boxes[4].innerHTML.includes("round") &&
        boxes[6].innerHTML.includes("round"));

    let crossPlayerWinCombos =
      //LINE 1
      (boxes[0].innerHTML.includes("cross") &&
        boxes[1].innerHTML.includes("cross") &&
        boxes[2].innerHTML.includes("cross")) ||
      // LINE 2
      (boxes[3].innerHTML.includes("cross") &&
        boxes[4].innerHTML.includes("cross") &&
        boxes[5].innerHTML.includes("cross")) ||
      //LINE 3
      (boxes[6].innerHTML.includes("cross") &&
        boxes[7].innerHTML.includes("cross") &&
        boxes[8].innerHTML.includes("cross")) ||
      //COLUMN 1
      (boxes[0].innerHTML.includes("cross") &&
        boxes[3].innerHTML.includes("cross") &&
        boxes[6].innerHTML.includes("cross")) ||
      //COLUMN 2
      (boxes[1].innerHTML.includes("cross") &&
        boxes[4].innerHTML.includes("cross") &&
        boxes[7].innerHTML.includes("cross")) ||
      //COLUMN 3
      (boxes[2].innerHTML.includes("cross") &&
        boxes[5].innerHTML.includes("cross") &&
        boxes[8].innerHTML.includes("cross")) ||
      //DIAGONAL 1
      (boxes[0].innerHTML.includes("cross") &&
        boxes[4].innerHTML.includes("cross") &&
        boxes[8].innerHTML.includes("cross")) ||
      //DIAGONAL 2
      (boxes[2].innerHTML.includes("cross") &&
        boxes[4].innerHTML.includes("cross") &&
        boxes[6].innerHTML.includes("cross"));

    if (roundPlayerWinCombos === true) {
      console.log("les ronds gagnent");
      setTimeout(() => {
        reset();
      }, 2000);
    } else if (crossPlayerWinCombos === true) {
      console.log("les croix gagnent");
      setTimeout(() => {
        reset();
      }, 2000);
    } else if (
      crossPlayerWinCombos === false &&
      roundPlayerWinCombos === false &&
      boxes[0].innerHTML &&
      boxes[1].innerHTML &&
      boxes[2].innerHTML &&
      boxes[3].innerHTML &&
      boxes[4].innerHTML &&
      boxes[5].innerHTML &&
      boxes[6].innerHTML &&
      boxes[7].innerHTML &&
      boxes[8].innerHTML
    ) {
      console.log("égalité");
      setTimeout(() => {
        reset();
      }, 2000);
    }
  });
}
