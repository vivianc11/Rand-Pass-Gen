

//generating a random character using ASCII
function getCharacter() {
  var asciiNum = Math.floor((Math.random()* 94)+ 33);
  var char = String.fromCharCode(asciiNum);
  return char;
}

function generatePassword() {
  var capChoice = window.prompt ('Would you like your password to have capital letters? (Yes or No)')
  // var numChoice = window.prompt ('Would you like your password to have numbers? (Yes or No)')
  // var symbolChoice = window.prompt ('Would you like to your password to have symbols? (Yes or No)')
  var userNum = window.prompt('How many characters do you want your password to have? Choose a number between 8 - 128');
  var password = ""
  for (let i = 1; i <= userNum; i++) { 
    var char = getCharacter();
    password += char;
  }
  if (capChoice === 'No'){
    var noCapPass = password.toLowerCase();
    return noCapPass;
  } else {
    return password;
  }
  
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
