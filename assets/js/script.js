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
			alert('Thank you!')
		} else {
		correct = "You must enter a number";
		alert(correct);
	}
	console.log(response);
};


function generatePassword() {
	askForLength();
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;

	
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
