const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

const form = document.getElementById("form-container");
const progressBar = document.querySelector(".progress-bar");
let username, email, password, confirmPass;

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
  if ((value.length > 0 && value.length < 3) || value.length > 20) {
    generalChecker(
      "username",
      "The username must be between 3 and 20 characters.",
      false
    );
    username = false;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    generalChecker("username", "The username must be without symbols.", false);
    username = false;
  } else {
    generalChecker("username", "", true);
    username = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i) && value.length > 0) {
    generalChecker("email", "Email invalid", false);
    email = false;
  } else {
    generalChecker("email", "", true);
    email = value;
  }
};

const passwordChecker = (value) => {
  if (value.length < 1) {
    progressBar.classList.remove(
      "progress-bar-red",
      "progress-bar-orange",
      "progress-bar-green"
    );
    generalChecker("password", "", true);
    password = false;
  } else if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    generalChecker(
      "password",
      "The password must contains at least 8 characters, one lowercase, one uppercase, one number and one symbol.",
      false
    );
    progressBar.classList.remove("progress-bar-green", "progress-bar-orange");
    progressBar.classList.add("progress-bar-red");
    password = false;
  } else if (value.length < 12) {
    generalChecker("password", "", true);
    progressBar.classList.remove("progress-bar-red", "progress-bar-green");
    progressBar.classList.add("progress-bar-orange");
    password = value;
  } else {
    generalChecker("password", " ", true);
    progressBar.classList.remove("progress-bar-red", "progress-bar-orange");
    progressBar.classList.add("progress-bar-green");
    password = value;
  }
  if (confirmPass === true) {
    confirmChecker(confirmPass);
  }
};

const confirmChecker = (value) => {
  if (value < 1) {
    generalChecker("confirm", "", true);
  } else if (value !== password) {
    generalChecker("confirm", "The passwords doesn't match.", false);
    confirmPass = false;
  } else {
    generalChecker("confirm", "", true);
    confirmPass = true;
  }
};

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

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username && email && password && confirmPass) {
    const data = {
      username,
      email,
      password,
    };

    inputs.forEach((input) => (input.value = ""));
    progressBar.classList.remove(
      "progress-bar-red",
      "progress-bar-orange",
      "progress-bar-green"
    );

    console.log(data);
    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    alert("Successful registration!");
  } else {
    alert("Please fill all the fields.");
  }
});
