function generatePassword() {
  var symbols = "~!@#$%^*-_=+[{]}/;:,.?";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var none = "";
  var capChoice = window.prompt ('Would you like your password to have capital letters? (Yes or No)');
  window.alert (`You chose ${capChoice} for capital letters`);
  var numChoice = window.prompt ('Would you like your password to have numbers? (Yes or No)');
  window.alert (`You chose ${numChoice} for numbers`);
  var symbolChoice = window.prompt ('Would you like to your password to have symbols? (Yes or No)');
  window.alert (`You chose ${symbolChoice} for symbols`);
  var userNum = window.prompt('How many characters do you want your password to have? Choose a number between 8 - 128');
  var options = ""
  var password = ""
  capChoice = capChoice.toLowerCase();
  numChoice = numChoice.toLowerCase();
  symbolChoice = symbolChoice.toLowerCase();
  options += lowerCase;

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

  function getCharacter() {
    var index = Math.floor((Math.random()* options.length));
    var char = options.charAt(index);
    return char;
  }

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
