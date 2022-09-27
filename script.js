// establishing static variables
const minLength = 8;
const maxLength = 128;
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '?'];

// storing user input
const chosen = {};

// main function to create random password using user selected criteria
function generatePassword() {
  alert("You will be prompted with various choices for your password: \nPASSWORD LENGTH: Password can be " + minLength + "to " + maxLength + " characters long. \n\nUPPER CASE LETTERS: Decide if you want uppercase letters in your password. \n\nLOWER CASE LETTERS: Decide if you want lowercase letters in your password. \n\nNUMBERS: Decide if you want numbers in your password. \n\nSPECIAL CHARACTERS: Decide if you want special characters in your password.")
  // user prompted with password criteria
  chosen.length = prompt("How long do you want your password to be? Choose a number between " + minLength + " and " + maxLength);
  // validate user input

  // user selects which criteria to include
  chosen.upperCase = confirm('Adding upper case letters to password... click "Cancel" to bypass');

  chosen.lowerCase = confirm('Adding lower case letters to password... click "Cancel" to bypass');

  chosen.numbers = confirm('Adding numbers to password... click "Cancel" to bypass');

  chosen.specialChar = confirm('Adding special characters to password... click "Cancel" to bypass');
}

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
