// Developed by Elijah Jackson

console.log("Welcome to the Password Validator Tool!")

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please enter a password to validate:", function(input){
	tokens = input;
	
	if (input.length >= 10){
        console.log("Yes, your password meets the requirements")
    } else {
        console.log("Sorry, this password failed to meet the requirements")
    }

	// This line closes the connection to the command line interface.
	reader.close()

});