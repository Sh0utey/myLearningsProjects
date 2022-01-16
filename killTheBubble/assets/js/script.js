const counterDisplay = document.getElementById("counterDisplay");
let count = 0;
const resetButton = document.getElementById("resetButton");

const bubbleGenerator = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
    bubble.remove();
  });

  resetButton.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = 0;
  });

  setInterval(() => {
    bubble.remove();
  }, 9000);
};

setInterval(bubbleGenerator, 600);
