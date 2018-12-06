var compGuess = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userChoices = [];

var compChoice = compGuess[Math.floor(Math.random() * compGuess.length)];
    console.log(compChoice)

document.onkeydown = function(event) {

    var choicesAvail = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var userGuess = event.key;
    console.log(userGuess)

    userChoices.push(userGuess);
    userGuess.textContent = userChoices.push(" ");

    if (choicesAvail.indexOf(userGuess) > -1) {

        if (userGuess !== compChoice) {
            guessesLeft--;
            userChoices.push(userGuess);
        }

        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            userChoices = [];
        }

        if (userGuess === compChoice) {
            wins++;
            guessesLeft = 9;
            userChoices = [];
        }
    }

    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guesses').innerHTML = guessesLeft;
    document.getElementById('numberGuesses').innerHTML = userChoices;

}