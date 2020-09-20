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
