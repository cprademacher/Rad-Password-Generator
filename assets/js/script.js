// Assignment Code
var generateBtn = document.querySelector('#generate');


function generatePassword() {
	// The variables below give us all the possible values of each type of character the user could choose from
	var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
	var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var numberCharacters = '1234567980';
	var specialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

	// Prompt for the user's desired password length, between 8 and 128 characters
	var lengthAnswer = prompt("Type desired lenght of password between 8 and 128 characters.");

	// Check that the user's input was within the allowed range, if not, alert them that they must submit a number within the givin range
	if (lengthAnswer < 8 || lengthAnswer > 128) {
			alert('Invalid entry: must be between 8 and 128');
			return; //since the entry is invalid, we shall return without collecting anything
		} 

	// Prompt the user to confirm whether or not they want to use each kind of character.
	var includeLowerCase = confirm('Do you want to use lower case letters in your password?');
	var includeUpperCase = confirm('Do you want to use upper case letters in your password?');
	var includeNumValue = confirm('Do you want to use numbers in your password?');
	var includeSpecialCharacters = confirm('Do you want to use special characters in your password?');

	// Make sure the user selected at least one kind of character to use, if not, alert them that they must use at least one
	if(!includeLowerCase && !includeUpperCase && !includeNumValue && !includeSpecialCharacters) {
		alert('You must select at least one type of character to use in your password.');
		return;
	}

	// Generate a password based on the selected criteria
	var password = '';
	var availableCharacters = '';

	// Check if lower case letters are selected, if so, add them to available characters
	if(includeLowerCase) {
		availableCharacters += lowerCaseCharacters;
	}

	// Check if upper case letters are selected, if so, add them to available characters
	if(includeUpperCase) {
		availableCharacters += upperCaseCharacters;
	}

	// Check if numbers are selected, if so, add them to available characters
	if(includeNumValue) {
		availableCharacters += numberCharacters;
	}

	// Check if special characters are selected, if so, add them to available characters
	if(includeSpecialCharacters) {
		availableCharacters += specialCharacters;
	}

	// Loop through the length that the user input in the first prompt
	for(var i = 0; i < lengthAnswer; i++) {
		// Creates a random number based on the the amount of characters the user input and saves it to the variable randomI
		var randomIndex = Math.floor(Math.random() * availableCharacters.length);
		// Adds random characters from the available characters list to the password for as many characters as the user input (saved in randomI)
		password += availableCharacters.charAt(randomIndex);
	}
	
	// Select the element with the ID of 'password' and set it equal to the variable passwordText
	var passwordText = document.querySelector('#password');

	// Set the variable passwordText's value equal to that of the generated password.
	passwordText.value = password;
}

// Add event listener to generate button that will call the generatePassword function
generateBtn.addEventListener('click', generatePassword);
