// establishing static variables
const minLength = 8;
const maxLength = 128;
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '+', '?'];
let all = [upperCase, lowerCase, numbers, specialCharacters];

let chosen = {}; // object for storing user input 
let working = []; // pools all symbols into one array to pull from
let passcode = []; // final array where random password will land
let counter = 0; // when static variable is added to working array, i'm pushing one item from each array when adding to working array so this counter will count how many random characters have been added before finalizing random password

// main function to create random passcode using user selected criteria
function generatePassword() {
  chosen = {};
  working = [];
  passcode = [];
  counter = 0;
  alert("You will be prompted with various choices for your password: \npasscode LENGTH: passcode can be " + minLength + " to " + maxLength + " characters long. \n\nUPPER CASE LETTERS: Decide if you want uppercase letters in your password. \n\nLOWER CASE LETTERS: Decide if you want lowercase letters in your password. \n\nNUMBERS: Decide if you want numbers in your password. \n\nSPECIAL CHARACTERS: Decide if you want special characters in your password.")

  // user prompted with passcode criteria

  chosen.length = prompt("How long do you want your passcode to be? Choose a number between " + minLength + " and " + maxLength);
  // chosen.length = parseInt(chosen.length);


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  


  // need to validate that user input is a number and an integer not a float
  while(chosen.length < minLength || chosen.length > maxLength || isNaN(chosen.length) ) { 
    if(chosen.length == undefined) {
    return;
    }
    chosen.length = prompt("Please choose valid number between " + minLength + " and " + maxLength);
  }

  // user selects which criteria to include
  while (!(chosen.upperCase || chosen.lowerCase || chosen.numbers || chosen.specialChar)) { // validates that at least one type was selected
  chosen.upperCase = confirm('Adding upper case letters to password... click "Cancel" to bypass');

  chosen.lowerCase = confirm('Adding lower case letters to password... click "Cancel" to bypass');

  chosen.numbers = confirm('Adding numbers to password... click "Cancel" to bypass');

  chosen.specialChar = confirm('Adding special characters to password... click "Cancel" to bypass');

  if (!(chosen.upperCase || chosen.lowerCase || chosen.numbers || chosen.specialChar)) {
    alert("Please choose at least one character type.")
  }
  }
 
  // adding user character choices to working array, and adding one random character from each chosen character type to password
  if (chosen.upperCase){
    working = working.concat(upperCase); // creating working array to pull random characters from
    passcode.push(upperCase[Math.floor(Math.random() * upperCase.length)]); // ensuring one item from each selected array is included in final password
    counter++; // will subtract counter # from final array length because of the push above
  }
  if (chosen.lowerCase){
    working = working.concat(lowerCase);
    passcode.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
    counter++;
  }
  if (chosen.numbers){
    working = working.concat(numbers);
    passcode.push(numbers[Math.floor(Math.random() * numbers.length)]);
    counter++;
  }
  if (chosen.specialChar){
    working = working.concat(specialCharacters);
    passcode.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
    counter++;
  }

  // assembling password
  for(var i = 0; i < chosen.length - counter; i++) {
    passcode.push(working[Math.floor(Math.random() * working.length)]);
  }
  console.log(passcode);
  // randomizing passcode character order
  shuffleArray(passcode);
  console.log(passcode);
  // remove spaces
  passcode = passcode.join("").trim();
  console.log(passcode);
  return passcode;
}

function shuffleArray(array) { 
  return array.sort(()=>Math.random()-0.5);
}

function selectText() {
  const input = document.getElementById('password');
  input.focus();
  input.select();
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password the #password input
function writePassword() {
  var password= generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
