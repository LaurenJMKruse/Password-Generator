# Password-Generator

## User Story
Concerned client seeks greater security in handling sensitive data. Requests program to generate random password. Password must meet specific criteria.


## Description
This program was assembled using HTML, CSS, and JavaScript code.
The application provides the client with the means to generate random passwords upon request.
The client's custom criteria is requested and utilized:
* A confirm requests the type(s) of character(s) the user wishes to implement
  * * Lowercase
  * * Uppercase
  * * Numbers
  * * Symbols
* A prompt requests the length of password
  * * Minimum of 8 characters
  * * Maximum of 128 characters

If the user selects special characters, a notification is given listing symbols that will not be included (due to potential confusion on user's part or within code)
User's input is validated.
If user enters invalid data, they are prompted to try again until valid input received.

Password is generated using:
* User's specifications
* Math.floor and Math.random functions
* Object holding character types
The password is output to the page, displaying within the blue window, and replacing the text, "Your Secure Password".


## Appearance
The colors within the CSS starter code were tweaked
* Wrapper changed from white to red 
Some of the text within the HTML code was tweaked
* Example: Changed button from "Generate Password" to "Click Here"
Padlock icon was added


## Challenges and Things Learned
Building this application was a good learning tool for understanding:
* Sequence of code
* DOM traversal
* Placement of variables
* How functions work
* How objects work
* Straight objects versus arrays
* How values are captured
* How Math.floor and Math.random may be utilized
My biggest challenge was implementing objects


## Improvements
This program is a work-in-progress. As I gain knowledge and experience with JavaScript, I would like to:
* Stream-line the application by making the code more concise
* Utilize functions to handle criteria prompts and confirms, negating the need for repeat code (Example: Calling a function within a while loop, if invalid input received)


## Installation
Installation is not required; the program runs in browser.
The deployed application may be found here:
https://laurenjmkruse.github.io/Password-Generator/


## Screenshot
Screenshot of the application may be found here (within the Password-Generator repository):
https://github.com/LaurenJMKruse/Password-Generator/blob/main/Screenshot-Password-Generator.jpg


## Instructions and Use
Instructions:
* Click on the red button marked "Click Here".
* User welcomed to page and asked to provide password criteria via alerts, confirms, and prompts (a total of 5 questions).
* If input is invalid, user will be prompted until valid data entered.
* User will see generated password appear in blue window. 


## Credits
To assemble this project, I relied upon the following:
* Coding Bootcamp classes taught by Michael Labieniec (my instructor)
* Clarification on DOM traversal and the use of functions by William Jones (my tutor)
* W3Schools: https://www.w3schools.com/
* MDN web docs: https://developer.mozilla.org/en-US/
Padlock icon was taken from Font Awesome: https://fontawesome.com/


## License
A license does not apply.


## Testing
Testing was incorporated in every stage of building this application:
* Invalid data was entered to ensure appropriate handling
* References were checked
* Values were checked
* Equation was checked 
* try...catch was added to capture any errors that may occur and log them in the console