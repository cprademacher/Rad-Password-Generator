// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
	var length = prompt("Type desired lenght of password between 8 and 128 characters.").length;
	var response;

	if (length == 0) {
		response = 'No answer given.';
	} else if (length < 8) {
		response = 'Password is too short.';
	} else if (length > 128) {
		response = 'Password is too long.';
	} else {
		response = 'Password is just right.';
	}
	alert(response);

}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;

	
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
