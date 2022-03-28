// Assignment code here
// var pwLength = 0;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function daPrompts() {

  // need 3 prompts for each criteria 
  var pwLength = parseInt(window.prompt("Choose a length for your password between 8 - 128"))

  while (pwLength < 8) {
    if (pwLength < 8 || pwLength > 128) {
      var pwLength = window.prompt("Choose a number between 8 - 128!");
    }
  }
  var upAndLower = window.confirm("Would you like upper and lowercase letters in your password?")
  console.log(upAndLower)

  var specialAndNumber = window.confirm("Would you like to have special characters and numbers in your password?")
  console.log(specialAndNumber)


  // create array based on value of user pw length input  

  spacesArray = []
  for (var i = 0; i < pwLength; i++) {
    spacesArray.push(i)
  }

  // loop through length of array to print out random digits equal to the length of the pw
  var stuff = "";

  spaceLength = spacesArray.length
  for (var b = 0; b < spaceLength; b++) {

    stuff += (Math.floor(Math.random() * spacesArray[b]));

  }
  console.log(stuff);

  // chop up the number string and insert random special characters and letters 
 
    
   

};

// function generatePassword() {





// take the from the variable and create total length of password 


// Add event listener to generate button
generateBtn.addEventListener("click", daPrompts)
// generateBtn.addEventListener("click", writePassword);
// generateBtn.addEventListener("click", generatePassword)
