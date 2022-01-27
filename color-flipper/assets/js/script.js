const backgroundInfos = document.querySelector(".background-infos");

const generateRandomColor = () => {
  const colorLetters = ["a", "b", "c", "d", "e", "f"];
  let color = colorLetters[Math.floor(Math.random() * 6)];

  for (let i = 0; i < 5; i++) {
    color += colorLetters[Math.floor(Math.random() * 6)];
  }

  backgroundInfos.textContent = `Background-color : #${color}`;
  document.body.style.background = `#${color}`;
};

clickMe.addEventListener("click", generateRandomColor);
