const buttons = document.querySelectorAll(".btn");
const result = document.querySelector(".result");

console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});

console.log(result);

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

reset.addEventListener("click", () => {
  result.textContent = "";
});
