'use strict';
/*
document.querySelector('.message').textContent = '✔ Correct Number';
document.querySelector('.score').textContent = '13'
document.querySelector('.number').textContent = '12'
document.querySelector('.guess').value = '12'
console.log(document.querySelector('.guess').value)

document.querySelector('.highscore').textContent = '100' *
*/

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value)
  if (guess === 50) {
    document.querySelector('.message').textContent = '✔ Correct Number';
  } else if (guess) {
    document.querySelector('.message').textContent = '👀 Incorrect Number'
  } else if (!guess) {
    document.querySelector('.message').textContent = '⛔ Fill In The Answer!'
  }
})