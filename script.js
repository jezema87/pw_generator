// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
console.log("Generate button was clicked");
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    console.log("setting #password to our generated password");
    passwordText.value = password;

}

function generatePassword() {
 var pass = '';
 var specialChar;
 var lowerCase;
 var upperCase;
 var numbers;

    //Get the password length to use.
    //Our while statement will keep prompting while we AREN'T meeting necessary standards (>8 & <128, and a number)
    console.log("Prompting for password length: prompt() used");
   var passwordLength = prompt("How long should the password be?", "8");
     while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
     console.log('The number ' + passwordLength + ' was chosen, which is not a valid entry');
     alert("Length must be a NUMBER & between 8-128");
     passwordLength = prompt("How long should the password be?", "8");
     }
     //Password Length being logged for debugging
     console.log('Password Length will be: ' + passwordLength);

    //We are seeing if they want to include special characters
    console.log("Prompting for special characters: confirm() if statement used.");
    if(confirm("Should we include special characters?")) {
    specialChar = '!@#$%^&*()';
    console.log('OKAY selected: var specialChar: ' + specialChar);
    } else {
    specialChar = '';
    console.log('CANCEL selected: var specialChar: ' + specialChar);
    };
        console.log("Prompting for lowercase characters: confirm() if statement used.");

    //Checking if lowercase characters should be included
     if(confirm("Should we include lowercase characters?")) {
        lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        console.log('OKAY selected: var lowerCase: ' + lowerCase);
        } else {
        lowerCase = '';
        console.log('CANCEL selected: var lowerCase: ' + lowerCase);
        };
    console.log("Prompting for uppercase characters: confirm() if statement used.");

    //Checking if uppercase characters should be included
     if(confirm("Should we include uppercase characters?")) {
        upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        console.log('OKAY selected: var upperCase: ' + upperCase);
        } else {
        upperCase = '';
        console.log('CANCEL selected: var upperCase: ' + upperCase);
        };
    console.log("Prompting for numbers: confirm() if statement used.");

    //Checking if numbers should be included
    if(confirm("Should we include number characters?")) {
        numbers = '0123456789';
        console.log('OKAY selected: var numbers: ' + numbers);
        } else {
        numbers = '';
        console.log('CANCEL selected: var numbers: ' + numbers);
        };
    console.log("setting var str to join specialChar + lowerCase + upperCase + numbers.");

        //join all the strings together based on options
        var str = specialChar + lowerCase + upperCase + numbers;
        //for loop to choose random number + update pass on that number
        console.log('Beginning for loop to build password');
        for (i = 1; i <= passwordLength; i++) {
            var char = Math.floor(Math.random()
                        * str.length + 1);

            pass += str.charAt(char)
        }
        return pass;
}



