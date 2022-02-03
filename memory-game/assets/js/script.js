document.addEventListener("DOMContentLoaded", () => {
  const cardsArray = [
    {
      name: "fries",
      src: "./assets/images/fries.png",
    },
    {
      name: "fries",
      src: "./assets/images/fries.png",
    },
    {
      name: "cheeseburger",
      src: "./assets/images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      src: "./assets/images/cheeseburger.png",
    },
    {
      name: "hotdog",
      src: "./assets/images/hotdog.png",
    },
    {
      name: "hotdog",
      src: "./assets/images/hotdog.png",
    },
    {
      name: "ice-cream",
      src: "./assets/images/ice-cream.png",
    },
    {
      name: "ice-cream",
      src: "./assets/images/ice-cream.png",
    },
    {
      name: "milkshake",
      src: "./assets/images/milkshake.png",
    },
    {
      name: "milkshake",
      src: "./assets/images/milkshake.png",
    },
    {
      name: "pizza",
      src: "./assets/images/pizza.png",
    },
    {
      name: "pizza",
      src: "./assets/images/pizza.png",
    },
  ];

  const grid = document.querySelector(".grid");

  let chosenCards = [];
  let chosenCardsId = [];
  let cardsWon = [];
  const result = document.getElementById("result");

  //create game board
  function createGameBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./assets/images/blank.png");
      card.setAttribute("data-id", i);
      grid.appendChild(card);
      card.addEventListener("click", flipTheCard);
    }
  }

  //flip the card
  function flipTheCard() {
    let cardId = this.getAttribute("data-id");
    chosenCards.push(cardsArray[cardId].name);
    chosenCardsId.push(cardId);
    this.setAttribute("src", cardsArray[cardId].src);
    this.setAttribute("src", cardsArray[cardId].src);
    if (chosenCards.length === 2) {
      setTimeout(checkForMatches, 500);
    }
  }

  //check for matches
  function checkForMatches() {
    const cards = document.querySelectorAll("img");
    if (chosenCards[0] === chosenCards[1]) {
      console.log("match");
      cards[chosenCardsId[0]].setAttribute("src", "./assets/images/white.png");
      cards[chosenCardsId[1]].setAttribute("src", "./assets/images/white.png");
      cardsWon.push(chosenCards);
      result.textContent = cardsWon.length;
    } else {
      console.log("not match");
      cards[chosenCardsId[0]].setAttribute("src", "./assets/images/blank.png");
      cards[chosenCardsId[1]].setAttribute("src", "./assets/images/blank.png");
    }
    chosenCards = [];
    chosenCardsId = [];

    if (cardsWon.length === cardsArray.length / 2) {
      result.textContent = "congrats";
    }
  }

  createGameBoard();
});
