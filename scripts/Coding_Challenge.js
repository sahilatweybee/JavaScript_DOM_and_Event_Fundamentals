'use strict';

var secretNo = Math.trunc(Math.random() * 21);
var score = 20;
var highscore = 0;
var currentGuess;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const playAgain = function () {
    score = 20;
    secretNo = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.currentGuess').value = '';

    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

const checkChoice = function () {
    currentGuess = Number(document.querySelector('.currentGuess').value);

    if (!currentGuess) {
        displayMessage('Not a Number!');

        // When player wins
    } else if (currentGuess === secretNo) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNo;
        document.body.style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        

        // When currentGuess is wrong
    } else if (currentGuess !== secretNo) {
        if (score >= 1) {
            displayMessage(currentGuess > secretNo ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            highscore = score;
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
}
document.querySelector('.check').addEventListener('click', checkChoice);
document.querySelector('.again').addEventListener('click', playAgain);