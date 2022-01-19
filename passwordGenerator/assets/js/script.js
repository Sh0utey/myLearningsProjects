const passwordLength = document.getElementById("password-length");
const passwordLengthSlider = document.getElementById("password-length-slider");
const passwordGenerated = document.getElementById("password-generated");
const errorMessage = document.querySelector(".error-message");

const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumber = "0123456789";
const dataSpecialCharacter = "!:;,<&'(-_)=~#{[|`^@]}";

passwordLengthSlider.addEventListener("input", () => {
  passwordLength.value = passwordLengthSlider.value;
});

const generatePassword = () => {
  let data = [];

  if (
    (lowercase.checked ||
      uppercase.checked ||
      number.checked ||
      specialCharacter.checked) === false
  ) {
    errorMessage.textContent =
      "No option selected. Please select at least one option.";
    passwordGenerated.value = "Error";
  } else {
    errorMessage.textContent = "";
    passwordGenerated.value = "";

    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (number.checked) data.push(...dataNumber);
    if (specialCharacter.checked) data.push(...dataSpecialCharacter);

    for (i = 0; i < passwordLength.value; i++) {
      passwordGenerated.value += data[Math.floor(Math.random() * data.length)];
    }

    passwordGenerated.select();
  }
};

generatePasswordButton.addEventListener("click", generatePassword);
