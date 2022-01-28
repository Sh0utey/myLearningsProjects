const userList = document.querySelector(".user-list");
const warningMessage = document.querySelector(".warning-message");

let listeID = 0;

//get elements stored on local storage with anonymous function
(() => {
  if (localStorage.list) {
    userList.innerHTML = localStorage.list;
  }
})();

const addTextToList = () => {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (userText.value) {
      userList.innerHTML += `
      <li>
      <label for="${listeID}">${userText.value}</label>
      <input type="checkbox" id="${listeID}" />
      </li>
      `;
      listeID++;
      userText.value = "";
      warningMessage.textContent = "";
    } else {
      warningMessage.textContent =
        "Veuillez écrire une tâche à faire avant de cliquer sur ajouter.";
    }

    let allCheckboxes = userList.querySelectorAll('input[type="checkbox"]');
    let allList = userList.querySelectorAll("li");

    allCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", (e) => {
        if (checkbox.checked) {
          e.path[1].remove();
          listeID--;
          allList = userList.querySelectorAll("li");
          localStorage.list = userList.innerHTML;
        }
      });
    });
    localStorage.list = userList.innerHTML;
  });
};

addTextToList();
