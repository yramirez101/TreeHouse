/*Random Number Guessing Game
Generates a number between 1-6, and gives player the option
to guess a new number, if too low/high */

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;

//Guess
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

//Convert string prompt to Intenger
if (parseInt(guess) === randomNumber) {
    correctGuess = true;
}

//The guess was too low
else if ( parseInt(guess) < randomNumber) {
    var guessAgain = prompt('Try again. Your guessed number was too low');
    
  //Test if this guess is correct
        if (parseInt(guessAgain) === randomNumber) {
            correctGuess = true;
        }
}
//The guess was too high  
else if ( parseInt(guess) > randomNumber) {
    var guessLower = prompt('Try again. Your guessed number was too high');
    
  //Test the new guess
    if (parseInt(guessLower) === randomNumber) {
        correctGuess = true;
    }
}

  //When the guess is correct, print this line out
if (correctGuess) {
    document.write('<p>Yes! You guessed the number!');
}

//Else - Guess incorrect, print this line out
else {
    document.write('<p>Aww. The number you guessed was not the one generated');
}