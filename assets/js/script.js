// Assignment Code
var generateBtn = document.querySelector('#generate');

// Below asks for desired length of password, makes sure 
// it is a number, and stores it as 'response', as long as it is between 
// 8 and 128 characters.
function askForLength() {
	var answer = prompt("Type desired lenght of password between 8 and 128 characters.");
	// var answer = parseInt(ask);
	var response;
	var correct;

		if (Number(answer) == 0) {
			correct = 'No answer given.';
			alert(correct);
		} else if (Number(answer) < 8) {
			correct = 'Length must be greater or equal to 8.';
			alert(correct);
		} else if (Number(answer) > 128) {
			correct = 'Length must be no more than 128';
			alert(correct);
		} else if (Number(answer) >= 8 && Number(answer) <= 128) {
			response = answer;
		} else {
		correct = "You must enter a number";
		alert(correct);
	}
	console.log(response);
};

// Below is a function that will confirm whether or not the user wants to use
// different types of characters in their password.  At least one of these has to
// be used, but any or all can be included.

function askForType() {
	var lowerCase = confirm('Do you want to use lower case letters in your password?');
	var upperCase = confirm('Do you want to use upper case letters in your password?');
	var numValue = confirm('Do you want to use numbers in your password?');
	var specialCharacters = confirm('Do you want to use special characters in your password?');

	if(lowerCase || upperCase || numValue || specialCharacters) {
		if(lowerCase) {
			console.log('Lower Case Letters have been selected.');
		} 

		if(upperCase) {
			console.log('Upper Case Letters have been selected.');
		}

		if(numValue) {
			console.log('Numbers have been selected.');
		}

		if(specialCharacters) {
			console.log('Special Characters have been selected.');
		}
	} else {
		alert('You must select at least one type of character to use in your password.')
	}
}




// The function below calls the functions we have created above.
function generatePassword() {
	askForLength();
	askForType();
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;

	
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
