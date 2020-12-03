

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
console.log("Object charTypes declared --\nlowerCase: " + charTypes.lowerCase + "\nupperCase: " + charTypes.upperCase + "\nnums: " + charTypes.nums + "\nsymbols: " + charTypes.symbols);

// Write password to the #password input
function writePassword() {    
           
      // Alerts, confirms, prompts
      // Welcome message and instructions
      alert("Welcome to the Password Generator!\nPlease respond to the following questions to establish criteria for your password. Click 'OK' for 'Yes' and 'Cancel' for 'No'.");

      // User asked to determine character types
      // Responses provide Boolean values for lower and uppercase letters, numbers,
      // and special characters
      lowerCaseLetters = confirm("Would you like to include lowercase letters?");
      console.log("User confirmed lowerCaseLetters to be " + lowerCaseLetters);
      
      upperCaseLetters = confirm("Should capital letters be used?");
      console.log("User confirmed upperCaseLetters to be " + upperCaseLetters);
      
      numbers = confirm("Should numerals be used?");
      console.log("User confirmed numbers to be " + numbers);
      
      specialChar = confirm("Would you like to include special characters?\nNOTE -- The following will not be included:\nSpaces\nDouble quotation marks\nBackslash");
      console.log("User confirmed specialChar to be " + specialChar);

      // Should while loop detect that no character types are selected, the user will be
      // prompted again
      while (lowerCaseLetters === false && upperCaseLetters === false && numbers === false && specialChar === false)
      {
            alert("You have not specified the type of characters that will comprise the password. At least one type is required. Please try again via the following prompts.");

            lowerCaseLetters = confirm("Would you like to include lowercase letters?");
            console.log("User confirmed lowerCaseLetters to be " + lowerCaseLetters);
            
            upperCaseLetters = confirm("Should capital letters be used?");
            console.log("User confirmed upperCaseLetters to be " + upperCaseLetters);
            
            numbers = confirm("Should numerals be used?");
            console.log("User confirmed numbers to be " + numbers);
            
            specialChar = confirm("Would you like to include special characters?\nNOTE: Spaces, single and double quotation marks, and tick marks will not be included.");
            console.log("User confirmed specialChar to be " + specialChar);
      }

      // Assembly of string of user-selected character types:
      if (lowerCaseLetters) possibleString += charTypes.lowerCase;            
      console.log("Value of possibleString plus lowerCaseLetters:" + possibleString);

      if (upperCaseLetters) possibleString += charTypes.upperCase;
      console.log("Value of possibleString plus upperCaseLetters:" + possibleString);

      if (numbers) possibleString += charTypes.nums;
      console.log("Value of possibleString plus numbers" + possibleString);

      if (specialChar) possibleString += charTypes.symbols;
      console.log("Value of possibleString plus symbols:" + possibleString);

      console.log("The value of possibleString before trim:" + possibleString);

      console.log("The value of possibleString with trim:" + possibleString.trim());

      // User is prompted to specify length of password
      numChar = prompt("How many characters should the password include?\nREQUIREMENTS:\nMinimum Number: 8\nMaximum Number: 128");
      console.log("User stated numChar to be " + numChar);

      // Should while loop detect invalid input, user is again prompted for password length
      while (numChar === null || numChar < 8 || numChar > 128)
      {
          numChar = prompt("You have incorrectly specified the number of characters. Please try again.\nREQUIREMENTS:\nMinimum Number: 8\nMaximum Number: 128");
          console.log("User stated numChar to be " + numChar);
      }

      // Conversion of password length from "string" (from user input) to number
      passwordLength = parseInt(numChar);
      console.log("numChar value of " + numChar + " converted to integer and stored in passwordLength: " + passwordLength);

      function generatePassword(numChars, possibleChars)
      {       
            var numChars;
            console.log("The value of numChars is " + numChars);
            var possibleChars;
            console.log("The value of possibleChars is " + possibleChars);
            var finalPassword = " ";
            console.log("The value of finalPassword before equation is " + finalPassword);

            for (var i = 0; i < numChars; i++)
            {
                finalPassword += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length)); 
            }

            console.log("The value of finalPassword is" + finalPassword);
            console.log("Count of characters in finalPassword is " + finalPassword.length);
            console.log("The finalPassword with trim is:" + finalPassword.trim());
            return finalPassword;
      }
  
      var password = generatePassword(passwordLength, possibleString.trim());
      var passwordText = document.querySelector("#password");

      passwordText.value = password.trim();
      console.log("The password is:" + password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










