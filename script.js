
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Draft of code to be added to writePassword function
// Alerts, confirms, prompts

// Welcome message and instructions
alert("Welcome to the Password Generator!\nPlease respond to the following questions to establish criteria for your password. Click 'OK' for 'Yes' and 'Cancel' for 'No'.");

// User is prompted to specify length of password
var numChar = prompt("How many characters should the password include?\nREQUIREMENTS:\nMinimum Number: 8\nMaximum Number: 128");

// Should while loop detect invalid input, user is again prompted for password length
while (numChar === null || numChar < 8 || numChar > 128)
{
    numChar = prompt("You have incorrectly specified the number of characters. Please try again.\nREQUIREMENTS:\nMinimum Number: 8\nMaximum Number: 128");
}

// User asked to determine character types
// Responses provide Boolean values for lower and uppercase letters, numbers,
// and special characters
var lowerCaseLetters = confirm("Would you like to include lowercase letters?");
var upperCaseLetters = confirm("Should capital letters be used?");
var numbers = confirm("Should numerals be used?");
var specialChar = confirm("Would you like to include special characters?\nNOTE: Spaces will not be included.");

// Should while loop detect that no character types are selected, the user will be
// prompted again
while (lowerCaseLetters === false && upperCaseLetters === false && numbers === false && specialChar === false)
{
      alert("You have not specified the type of characters that will comprise the password. At least one type is required. Please try again via the following prompts.");

      lowerCaseLetters = confirm("Would you like to include lowercase letters?");
      upperCaseLetters = confirm("Should capital letters be used?");
      numbers = confirm("Should numerals be used?");
      specialChar = confirm("Would you like to include special characters?\nNOTE: Spaces will not be included.");
}