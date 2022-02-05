const list = document.querySelector(".list");

submit.addEventListener("click", createElement);

//create an element in the list
function createElement() {
  const item = document.createElement("div");
  const grocery = document.createElement("input");
  grocery.setAttribute("type", "text");
  grocery.readOnly = true;
  const edit = document.createElement("div");
  const erase = document.createElement("div");

  item.classList.add("item");
  grocery.classList.add("grocery");
  edit.classList.add("edit");
  erase.classList.add("erase");

  if (userInput.value && submit.value === "Submit") {
    list.appendChild(item);
    item.appendChild(grocery);
    item.appendChild(edit);
    item.appendChild(erase);
    grocery.setAttribute("value", userInput.value);
    edit.textContent = "edit";
    erase.textContent = "erase";
    userInput.value = "";
  } else {
    console.log("le champ est vide");
  }

  edit.addEventListener("click", editOrSave);
  erase.addEventListener("click", eraseElement);
}

//edit or save an element in the list
function editOrSave() {
  if (this.textContent === "edit") {
    this.textContent = "save";
    this.parentNode.firstChild.focus();
    this.parentNode.firstChild.readOnly = false;
  } else {
    this.parentNode.firstChild.setAttribute(
      "value",
      this.parentNode.firstChild.value
    );
    this.parentNode.firstChild.readOnly = true;
    this.textContent = "edit";
  }
}

//erase an element in the liste
function eraseElement() {
  this.parentNode.remove();
}
