

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters;
var upperCaseLetters;
var numbers;
var specialChar;
var numChar;
var passwordLength;
var possibleString = " ";
var finalString = " ";                                       // FIX THIS; NOT DEFINED

// Object containing strings of character choices
var charTypes = {
     lowerCase: "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z",
     upperCase: "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z",
     nums: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9",
     symbols: "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
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
      specialChar = confirm("Would you like to include special characters?\nNOTE: Spaces will not be included.");

      // Should while loop detect that no character types are selected, the user will be
      // prompted again
      while (lowerCaseLetters === false && upperCaseLetters === false && numbers === false && specialChar === false)
      {
            alert("You have not specified the type of characters that will comprise the password. At least one type is required. Please try again via the following prompts.");

            lowerCaseLetters = confirm("Would you like to include lowercase letters?");
            upperCaseLetters = confirm("Should capital letters be used?");
            numbers = confirm("Should numerals be used?");
            specialChar = confirm("Would you like to include special characters?\nNOTE: Spaces, single and double quotation marks, and tick marks will not be included.");
      }

      // Assembly of string of user-selected character types:
      if (lowerCaseLetters) possibleString += charTypes.lowerCase;            
      
      if (upperCaseLetters) possibleString += charTypes.upperCase;

      if (numbers) possibleString += charTypes.nums;

      if (specialChar) possibleString += charTypes.symbols;

      console.log(`possibleString value: ${possibleString}`);

      // User is prompted to specify length of password
      numChar = prompt("How many characters should the password include?\nREQUIREMENTS:\nMinimum Number: 8\nMaximum Number: 128");

      // Should while loop detect invalid input, user is again prompted for password length
      while (numChar === null || numChar < 8 || numChar > 128)
      {
          numChar = prompt("You have incorrectly specified the number of characters. Please try again.\nREQUIREMENTS:\nMinimum Number: 8\nMaximum Number: 128");
      }

      // Conversion of password length from "string" (from user input) to number
      passwordLength = parseInt(numChar);

      function generatePassword(numChars, possibleChars)
      {       
            var numChars;
            var possibleChars;
            var finalPassword = " ";

            for (var i = 0; i < possibleChars.length; i++)
            {
                finalPassword += possibleChars.charAt(Math.floor(Math.random() * numChars)); 
            }

            return finalPassword;
      }
  
      var password = generatePassword(possibleString.length, possibleString);
      var passwordText = document.querySelector("#password");

      passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










