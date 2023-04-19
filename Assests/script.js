// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(){
  var generatedPassword="";
  // generate password
  //-1 ask user how mnay characters
  var numberOfCharacters=prompt("How mnay characters in the password?");
  //-2 ask if the user wants to include special characters
  var includeSpecialCharacter=confirm("Do you want to add any special characters?");
  //-3 ask if the user wants to include upper case letters
  var includeUpperCasecharacter=confirm("Do you want to add an upper-case letter?");
  //-4 ask the user if wants to include lower case letters
  var includeLowerCaseCharacters=confirm("Do you want to add lower-case characters?");
  //-5 ask if the userr wants to include numbers
  var includeNumbers=confirm("Do you want to add numbers?")
  //-6 Generate a password that include the selections of the user and put it in the the generatedPassword variable
 

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
