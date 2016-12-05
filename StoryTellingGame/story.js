//The Story Making Game

//1. Use prompt to collect noun
var yNoun = prompt("Hey user, could you please give me a noun?");

//1a. Use prompt to collect verb
var xVerb = prompt("Hey user, could you please give me a verb?");

//1b. Use prompt to collect adjective
var zAdjective = prompt("Hey user, could you please give me an adjective?");

//Combine variables with other strings
var nonSensical = zAdjective + " likes to " + xVerb + " on " + yNoun;

//Alert visitor that they are finished
alert("You are done. Thank you for your help!");

//Logged to console
console.log(nonSensical);

//Print to browser
document.write(nonSensical);