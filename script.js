
// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters;
var upperCaseLetters;
var numbers;
var specialChar;
var numChar;
var passwordLength;
var possibleString = " ";
var trimmedPossibleString = " ";

// Object containing strings of character choices
var charTypes = {
     lowerCase: "abcdefghijklmnopqrstuvwxyz",
     upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
     nums: "0123456789",
     symbols: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
};

// Write password to the #password input
function writePassword() {    
           
      // Alerts, confirms, prompts
      // Welcome message and instructions
      alert("Welcome to the Password Generator!\nPlease respond to the following questions to establish criteria for your password. Click 'OK' for 'Yes' and 'Cancel' for 'No'.");

      // User asked to determine character types
      // Responses provide Boolean values for lower and uppercase letters, numbers,
      // and special characters
      lowerCaseLetters = confirm("Would you like to include lowercase letters?");
           
      upperCaseLetters = confirm("Should capital letters be used?");
      
      numbers = confirm("Should numerals be used?");
      
      specialChar = confirm("Would you like to include special characters?\nNOTE: Spaces, double quotation marks, and backslash will not be included.");
     
      // Should while loop detect that no character types are selected, the user will be
      // prompted again
      while (lowerCaseLetters === false && upperCaseLetters === false && numbers === false && specialChar === false)
      {
            alert("You have not specified the type of characters that will comprise the password. At least one type is required. Please try again via the following prompts.");

            lowerCaseLetters = confirm("Would you like to include lowercase letters?");
            
            upperCaseLetters = confirm("Should capital letters be used?");
                      
            numbers = confirm("Should numerals be used?");
            
            specialChar = confirm("Would you like to include special characters?\nNOTE: Spaces, double quotation marks, and backslash will not be included.");
      }

      // Assembly of string of user-selected character types:
      if (lowerCaseLetters) possibleString += charTypes.lowerCase;            
    
      if (upperCaseLetters) possibleString += charTypes.upperCase;
    
      if (numbers) possibleString += charTypes.nums;

      if (specialChar) possibleString += charTypes.symbols;

     
      // User is prompted to specify length of password
      numChar = prompt("How many characters should the password include?\nREQUIREMENTS:\nMinimum Number: 8\nMaximum Number: 128");

      // Should while loop detect invalid input, user is again prompted for password length
      while (numChar === null || numChar < 8 || numChar > 128)
      {
          numChar = prompt("You have incorrectly specified the number of characters. Please try again.\nREQUIREMENTS:\nMinimum Number: 8\nMaximum Number: 128");
      }

      // Conversion of password length from "string" (from user input) to number
      passwordLength = parseInt(numChar);
     
      function generatePassword(numCharacters, possibleCharacters)
      {       
            var numCharacters;
            var possibleCharacters;
            var finalPassword = " ";
           
            for (var i = 0; i < numCharacters; i++)
            {
                finalPassword += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length)); 
            }

            return finalPassword;
      }
  
      var password = generatePassword(passwordLength, possibleString.trim());
      var passwordText = document.querySelector("#password");

      passwordText.value = password.trim();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
