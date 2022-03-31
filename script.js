// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

    // need 3 prompts for each criteria 
    var pwLength = parseInt(window.prompt("Choose a length for your password between 8 - 128"))

    while (pwLength < 8) {
        if (pwLength < 8 || pwLength > 128) {
            var pwLength = window.prompt("Choose a number between 8 - 128!");
        }
    }
    var upAndLower = window.confirm("Would you like Mixed casing in your password?")
    console.log(upAndLower)

    var specialAndNumber = window.confirm("Would you like to have special characters and numbers in your password?")
    console.log(specialAndNumber)


    // create array based on value of user pw length input  

    spacesArray = []
    for (var i = 0; i < pwLength; i++) {
        spacesArray.push(i)
    }

    // loop through length of array to print out random chars equal to the length of the pw
    var stuff = "";
    upAndLowerz = "abcdefghijkhijklmnopqu!@#$%^&*rstuvwxyzABCD!@#$%^&*EFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
    spaceLength = spacesArray.length
    for (var b = 0; b < spaceLength; b++) {
        stuff += upAndLowerz.charAt(Math.floor(Math.random() * upAndLowerz.length));

    }

    console.log(stuff)

   // loop through length of array to print out random int's equal to the length of the pw
    var numNums = "";
    spaceLength = spacesArray.length
    for (var r = 0; r < spaceLength; r++) {
        numNums += (Math.floor(Math.random() * spacesArray[r]));
    }
    console.log(numNums);

    // concat int and letter strings

    passWORD = stuff + numNums

    // chop up the new string and insert random special characters and letters

    function shuffle(s) {
        var arr = s.split('');        

        arr.sort(function () {
            return 0.5 - Math.random();
        });
        s = arr.join('');             
        return s;                        
    }
    var s = passWORD;
    s = shuffle(s);
    console.log(s.slice(0, pwLength))

    finalPw = s.slice(0, pwLength)

    var passwordText = document.querySelector("#password");

    passwordText.value = finalPw;

}



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generatePassword)
