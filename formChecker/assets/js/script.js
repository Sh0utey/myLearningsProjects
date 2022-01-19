const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

const generalChecker = (tag, errorMessage, valid) => {
  const selectedInput = document.getElementById(tag);
  const warningMessage = document.querySelector(
    "." + tag + "-container > span"
  );

  if (!valid) {
    selectedInput.style.border = "solid 2px red";
    warningMessage.textContent = errorMessage;
  } else {
    selectedInput.style.border = "solid 1px rgba(0, 0, 0, 0.171)";
    warningMessage.textContent = "";
  }
};

const usernameChecker = (value) => {
  console.log(value.length);
  if ((value.length > 0 && value.length < 3) || value.length > 20) {
    generalChecker(
      "username",
      "The username must be between 3 and 20 characters.",
      false
    );
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    generalChecker("username", "The username must be without symbols.", false);
  } else {
    generalChecker("username", "caca", true);
  }
};

const emailChecker = (value) => {};
const passwordChecker = (value) => {};
const confirmChecker = (value) => {};

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    switch (input.id) {
      case "username":
        usernameChecker(input.value);
        break;
      case "email":
        emailChecker(input.value);
        break;
      case "password":
        passwordChecker(input.value);
        break;
      case "confirm":
        confirmChecker(input.value);
        break;
      default:
        null;
    }
  });
});
