const counterDisplay = document.querySelector(".counter");
let counter = 0;
counterDisplay.textContent = counter;

const decreaseCounter = () => {
  counter--;
  counterDisplay.textContent = counter;
  colorCounter();
};

const increaseCounter = () => {
  counter++;
  counterDisplay.textContent = counter;
  colorCounter();
};

const resetCounter = () => {
  counter = 0;
  counterDisplay.textContent = counter;
  colorCounter();
};

const colorCounter = () => {
  if (counter > 0) {
    counterDisplay.style.color = "green";
  } else if (counter < 0) {
    counterDisplay.style.color = "red";
  } else {
    counterDisplay.style.color = "black";
  }
};

decrease.addEventListener("click", decreaseCounter);
increase.addEventListener("click", increaseCounter);
reset.addEventListener("click", resetCounter);
