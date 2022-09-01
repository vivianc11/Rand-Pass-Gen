var password = "";

//generating a random character using ASCII
function getCharacter() {
  var asciiNum = Math.floor((Math.random()* 94)+ 33);
  var char = String.fromCharCode(asciiNum);
  return char;
}


function generatePassword() {
  var userNum = window.prompt('How many characters do you want your password to have? Choose a number between 8 - 128');
  
  for (let i = 0; i <= userNum; i++) { 
    var char = getCharacter();
    password += char;
  } return password;

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
generateBtn.addEventListener("click", clea)
generateBtn.addEventListener("click", writePassword);
