// Assignment Code

//console.log("hello");

//variables
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!#[]$%&'()*+,-./:;<=>?@^`{|}]~";
var numChar = "0123456789";
var possibleCharacters = "";
var password = "";
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = "";
  possibleCharacters = "";
  characterAmount = prompt(
    "Enter the length of characters for your password. Choose between 8 and 128 characters."
  );
  if (characterAmount < 8) {
    alert("Choose between 8 to 128 characters");
  } else if (characterAmount > 128) {
    alert("Choose between 8 to 128 characters");
    return writePassword();
  }

  //Confirms guide user through password choices
  var includeUppercase = confirm("Would you like to use uppercase Letters?");

  var includeLowercase = confirm("Would you like to use lowercase letters?");

  var includeNumbers = confirm("Would you like to use numbers?");

  var includeSymbols = confirm("Would you like to use special symbols?");

  if (
    includeUppercase === false &&
    includeLowercase === false &&
    includeNumbers === false &&
    includeSymbols === false
  ) {
    alert("Select possible characters to proceed.");

    return writePassword();
  }

  //Chooses characters
  if (includeUppercase) {
    possibleCharacters += upperChar;
  }

  if (includeLowercase) {
    possibleCharacters += lowerChar;
  }

  if (includeNumbers) {
    possibleCharacters += numChar;
  }

  if (includeSymbols) {
    possibleCharacters += symbols;
  }

  //Final loop that outputs password
  for (var i = 0; i < characterAmount; i++) {
    password +=
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria.

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
