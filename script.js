'use strict';
/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number 🥳';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

/////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\
// --- DOM & EVENTS FUNDAMENTALS ---

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// --- DISPLAY MESSAGE // DISPLAY NUMBER || CLEAN CODE ---
const changeMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const changeNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const changeScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const changeBody = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    changeMessage('😳 No number');

    // When player wins
  } else if (guess === secretNumber) {
    changeMessage('🥳 Correct Number');
    changeNumber(secretNumber);

    changeBody('#60b347');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      changeMessage(guess > secretNumber ? '⤴️ Too high' : '⤴️ Too low');
      score--;
      changeScore(score);
    } else {
      changeMessage('❌ You lost the Game');
      changeScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  changeScore(score);
  changeNumber('?');

  changeMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  changeBody('#222');
  document.querySelector('.number').style.width = '15rem';
});

/////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\
// --- CODING CHALLENGE #1 ---
/* 
Implement a game rest functionality, so that the player can make a new guess!

Your tasks:
1. Select the element with the 'again' class and attach a click event handler 
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial condition so the message, number, score and guess input fields
4. Also restore the orinal background color (#222) and number width (15rem)
GOOD LUCK 😀 
*/
