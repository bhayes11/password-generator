// Assignment Code
var generateBtn = document.querySelector("#generate");

//console.log("hello");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword(){
  return "this will be replaced by my generated password.";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompt starts once the btn is clicked
function writePassword() {
  prompt("Enter the length of characters for your password. Choose between 8 and 128 characters.");
  confirm("Would you like to use uppercase Letters?")
  confirm("Would you like to use lowercase letters?")
  confirm("Would you like to use special characters?")
  confirm("Would you like to use numbers?")
}

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