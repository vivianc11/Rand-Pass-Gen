function generatePassword() {
  // Putting all the characters that are going to be used into separate variables
  var symbols = "~!@#$%^*-_=+[{]}/;:,.?";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var none = "";
  // Prompting the user to ask for inclusion of capital letters
  var capChoice = prompt ('Would you like your password to have capital letters? (Yes or No)');
  capChoice = capChoice.toLowerCase();
  // While the user continues to input data that is not yes or no, they will be given this prompt
  // User has to put in valid information to continue
  while (capChoice != "yes" && capChoice != "no") {
    capChoice = prompt ("That is an INVALID input. Please answer with a Yes or No. Would you like your password to have capital letters? ")
    capChoice = capChoice.toLowerCase();
  }
      alert (`You chose ${capChoice} for capital letters`);

  // Prompting the user to ask for inclusion of numbers
  var numChoice = prompt ('Would you like your password to have numbers? (Yes or No)');
  numChoice = numChoice.toLowerCase();
  while (numChoice != "yes" && numChoice != "no") {
    capChoice = prompt ("That is an INVALID input. Please answer with a Yes or No. Would you like your password to have numbers? ")
    numChoice = numChoice.toLowerCase();
  }
      alert (`You chose ${numChoice} for capital letters`);

  // Prompting the user to ask for inclusion of symbols
  var symbolChoice = prompt ('Would you like to your password to have symbols? (Yes or No)');
  symbolChoice = symbolChoice.toLowerCase();
  while (symbolChoice != "yes" && symbolChoice != "no") {
    capChoice = prompt ("That is an INVALID input. Please answer with a Yes or No. Would you like your password to have symbols? ")
    symbolChoice = symbolChoice.toLowerCase();
  }
      alert (`You chose ${symbolChoice} for capital letters`);

  // Prompting the user for number of characters for the password
  var userNum = prompt('How many characters do you want your password to have? Choose a number between 8 - 128');
  // While loop to validate that the user enters an integer that is between 8 and 128
  while (!parseInt(userNum) || userNum < 8 || userNum > 128) {
    userNum = prompt("That is an INVALID input. Please answer with a number between 8 - 128")
  }
  // Creating empty strings for options and password variable
  var options = ""
  var password = ""
  // Filling in the options variable with lower case letters
  options += lowerCase;

  // If the user inputted yes to any of the criteria, then that variable will
  // be added to the options variable. 
  //If the user inputs no, then nothing will be added
  if (capChoice === "yes") {
    options += upperCase;
  } else {
    options += none;
  }
  
  if (numChoice === "yes") {
    options += numbers;
  } else {
    options += none;
  }

  if (symbolChoice === "yes") {
    options += symbols;
  } else {
    options += none;
  }

  // Function that randomly outputs a number that will be used to index 
  // the options variable for a random character
  function getCharacter() {
    var index = Math.floor((Math.random()* options.length));
    var char = options[index];
    return char;
  }

  // For loop that takes however many character the user wants and
  // only makes a password up to that many characters
  for (let i = 0; i <= userNum; i++) {
    var char = getCharacter();
    password += char;
    
  }
  return password;
}
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  document.getElementById("password").value = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
