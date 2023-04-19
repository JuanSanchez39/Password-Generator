// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var generatedPassword = "";
  var characters = "";
  //-1 ask user how mnay characters
  var numberOfCharacters = prompt("How many characters in the password?");
  console.log(numberOfCharacters)
  if (!numberOfCharacters) {
    return;
  }
  if (numberOfCharacters < 8) {
    alert("needs to at least 8 characters");
    generatePassword()
    return;
  }
  //-2 ask if the user wants to include special characters
  var includeSpecialCharacter = confirm("Do you want to add any special characters?");
  if (includeSpecialCharacter) {
    characters += "!@#$%^&*()";
  }
  //-3 ask if the user wants to include upper case letters
  var includeUpperCasecharacter = confirm("Do you want to add an upper-case letter?");
  if (includeUpperCasecharacter) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  //-4 ask the user if wants to include lower case letters
  var includeLowerCaseCharacters = confirm("Do you want to add lower-case characters?");
  if (includeLowerCaseCharacters) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  //-5 ask if the user wants to include numbers
  var includeNumbers = confirm("Do you want to add numbers?")
  if (includeNumbers) {
    characters += "0123456789";
  }
  //-6 Generate a password that include the selections of the user and put it in the the generatedPassword variable
  console.log(characters);
  console.log(includeSpecialCharacter);
  var passwordLength = numberOfCharacters;
  while () {
    for (var i = 0; i < passwordLength; i++)
      var randomNumber = Math.floor(Math.random() * characters.length);
    console.log(randomNumber);
    generatedPassword += characters.charAt(randomNumber);
  }
  return generatedPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
