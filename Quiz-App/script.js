/* Quiz application
1) User is asked 5 questions,
2) Keeps track of the number of questions answered correctly,
3) Final message displayed to the user on how many questions were answered
correctly.
4) User receives a crown based on the # of questions answered correctly.

5 questions correct - gold crown
3-4 questions correct - silver crown
1-2 questions correct - bronze crown
0 questions correct - no crown
*/

//Question Tracker
var tracker = 0;

//Prompt user for their name
var user = prompt('Welcome to the quiz app. What is your name?');
document.write('<p>It is very nice to meet you, ' + user + '</p>');

var disclose = alert('You will be asked a series of questions. Are you ready, ' + user + '? Let\'s go.');


//1st Question
var questionOne = 'How many feet are in one yard?';

var answer1 = prompt(questionOne);
if (parseInt (answer1) === 3) {
    window.alert('You are correct!');
	tracker += 1;

}

else {
    window.alert('I\'m sorry, that is incorrect.');
//      tracker -= 1;
}

//Transcript
document.write('<p>Question 1: ' + '<b>' + questionOne + '</b>' + '<br/>' + 'Your answer was: ' + '<i>' + answer1 + '</i>' + '</p>');


//2nd Question
var questionTwo = 'How many days are in the month of December?';

var answer2 = prompt(questionTwo);
if (parseInt (answer2) === 31) {
    window.alert('Yes!');
    tracker += 1;
}

else {
    window.alert('I\'m sorry, that is incorrect.');
//    tracker -= 1;
}

//Transcript
document.write('<p>Question 2: ' + '<b>' + questionTwo + '</b>' + '<br/>' + 'Your answer was: ' + '<i>' + answer2 + '</i>' + '</p>');


//3rd Question
var questionThree = 'How many ounces are there in a pound?';

var answer3 = prompt(questionThree);
if (parseInt (answer3) === 16) {
    window.alert('You got it!');
    tracker += 1;
}

else {
    window.alert('I\'m sorry, that is incorrect.');
//        tracker -= 1;
}

//Transcript
document.write('<p>Question 3: ' + '<b>' + questionThree + '</b>' + '<br/>' + 'Your answer was: ' + '<i>' + answer3 + '</i>' + '</p>');


//4th Question
var questionFour = 'At how many degrees Fahrenheit, does water freeze?';

var answer4= prompt(questionFour);
if (parseInt (answer4) === 32) {
    window.alert('Good work. You got that right');
    tracker += 1;
}

else {
    window.alert('I\'m sorry, that is incorrect.');
//       tracker -= 1;
}

//Transcript
document.write('<p>Question 4: ' + '<b>' + questionFour + '</b>' + '<br/>' + 'Your answer was: ' + '<i>' + answer4 + '</i>' + '</p>');



//5th Question
var questionFive = 'What is 2 + 2?';

var answer5 = prompt(questionFive);
if (parseInt (answer5) === 4) {
    window.alert('Math whiz! Correct again');
    tracker += 1;
}


else {
    window.alert('I\'m sorry, that is incorrect.');
//        tracker -= 1;
}


//Transcript
document.write('<p>Question 5: ' + '<b>' + questionFive + '</b>' + '<br/>' + 'Your answer was: ' + '<i>' + answer5 + '</i>' + '</p>');


//Output Status
document.write('<p>You answered ' + tracker + ' out of 5 questions correctly.');

//Tracker Number Result
if (tracker === 5) {
    document.write('<br/> <p><strong>You earned a gold crown!</strong></p>');
}

else if (tracker >= 3) {
    document.write('<br/> <p><strong>You earned a silver crown!</strong></p>');
}

else if (tracker >= 1) {
    document.write('<br/> <p><strong>You earned a bronze crown!</strong></p>');
}

else {
    document.write('<br/> <p><strong>I\'m sorry but you did not earn a crown. </strong></p>');
    }