// Assignment code here
//generating a random character using ASCII
function getCharacter() {
  var asciiNum = Math.floor((Math.random()* 94)+ 33);
  var char = String.fromCharCode(asciiNum);
  return char;
}

function generatePassword() {
  var password = "";
  var char = getCharacter();
  password += char;

  for (let i = 1; i <= 12; i++) {
    
  }
  }



}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
