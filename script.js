// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numericCharacters = "0123456789".split("");
var specialCharacters = "!@#$%^&*()<>?/.,;:|".split("");
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
function generatePassword() {
    var passwordLength = prompt("How long do you want your password to be? ");
    var criteria = 0;
    var generatedPassword = " ";
    passwordLength = parseInt(passwordLength);
    if (passwordLength < 128 && passwordLength > 8) {
        var lowercase = confirm("Do you want to include lowercase?");
        var uppercase = confirm("Do you want to include uppercase?");
        var numeric = confirm("Do you want to include numeric characters?");
        var specialCharacters = confirm("Do you want to include special characters?");
        if (lowercase) {
            criteria++;
        }
        if (uppercase) {
            criteria++;
        }
        if (numeric) {
            criteria++;
        }
        if (specialCharacters) {
            criteria++;
        }
        if (criteria > 0) {
            for (var i = 1; i <= passwordLength; i += criteria) {
                console.log(generatedPassword);
                if (lowercase) {
                    generatedPassword += randomCharacter(lowercaseCharacters);
                }
                if (uppercase) {
                    generatedPassword += randomCharacter(uppercaseCharacters);
                }
                if (numeric) {
                    generatedPassword += randomCharacter(numericCharacters);
                }
                if (specialCharacters) {
                    generatedPassword += randomCharacter(specialCharacters);
                }
            }
            return generatedPassword.trim();
        } else {
            alert("You need to pick at least one criteria.");
        }
    }
    alert("The password needs to be more than 8 and less than 128.");
}
function randomCharacter(characterChoices) {
    var index = Math.floor(Math.random() * characterChoices.length - 1);
    return characterChoices[index];
}