var secretNo = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('#check').addEventListener('click', function () {
    var currentGuess = Number(document.getElementById('currentGuessed-no').value);
    
    if (!currentGuess) {
        displayMessage('Not a umber!');
        // When player wins
    } else if (currentGuess === secretNo) {
        displayMessage('Correct Number!');
        document.getElementById('num').textContent = secretNo;
        document.body.style.backgroundColor = '#60b347';
        document.getElementById('num').style.width = '30rem';

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When currentGuess is wrong
    } else if (currentGuess !== secretNo) {
        if (score > 1) {
            displayMessage(currentGuess > secretNo ? 'Too high!' : 'Too low!');
            score--;
            document.getElementsByClassName('score').textContent = score;
        } else {
            highscore = score;
            displayMessage('You lost the game!');
            document.getElementsByClassName('score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNo = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start Guessing...');
    document.getElementsByClassName('score').textContent = score;
    document.getElementById('num').textContent = '?';
    currentGuess = '';

    document.body.style.backgroundColor = '#222';
    document.getElementById('num').style.width = '15rem';
});