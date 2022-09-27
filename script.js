// establishing static variables
const minLength = 8;
const maxLength = 128;
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '?'];

// storing user input
let chosenLength;

// main function to create random password using user selected criteria
function generatePassword() {
  // user prompted with password criteria
  chosenLength = prompt("How long do you want your password to be? Choose a number between " + minLength + " and " + maxLength)
}


// user selects which criteria to include

// user chooses length > 8 characters and < 128 characters

// user confirms whether or not to use lowercase, uppercase, numeric, and special characters

// user input needs to be validated and at least one character type selected
  // what is answered as true needs to be included

// when all prompts answered, a password is randomly generated
  // how to randomly grab values from each included category?
  // assemble password into one string to be returned


// password is either displayed as alert or written to the page



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
