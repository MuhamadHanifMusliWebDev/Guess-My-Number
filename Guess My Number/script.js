'use strict';
/*
document.querySelector('.message').textContent = '✔ Correct Number';
document.querySelector('.score').textContent = '13'
document.querySelector('.number').textContent = '12'
document.querySelector('.guess').value = '12'
console.log(document.querySelector('.guess').value)

document.querySelector('.highscore').textContent = '100' *
*/

let number = 20

const secretNumber = Math.trunc(Math.random() * 20 + 1)

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value)
  if (!guess) {
    // KETIKA USER TIDAK MENGISI KOLOM JAWABAN
    document.querySelector('.message').textContent = '⛔ Fill In The Answer!'
  } else if (guess > secretNumber) {
    // KETKA JAWABAN USER LEBIH TINGGI DARI SECRET NUMBER 
    if (number > 1) {
      document.querySelector('.message').textContent = '📈 Too High!'
      number--;
      document.querySelector('.score').textContent = number
    } else {
      document.querySelector('.message').textContent = '😩 You Lose The Game'
      document.querySelector('.score').textContent = '0'

      document.querySelector('h1').textContent = 'The Correct Answer Is'
      document.querySelector('.number').textContent = secretNumber
      document.querySelector('body').style.backgroundColor = 'red'
      document.querySelector('.number').style.width = '30rem'
    }
  } else if (guess < secretNumber) {
    // KETKA JAWABAN USER LEBIH RENDAH DARI SECRET NUMBER 
    if (number > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!'
      number--;
      document.querySelector('.score').textContent = number
    } else {
      document.querySelector('.message').textContent = '😩 You Lose The Game'
      document.querySelector('.score').textContent = '0'

      document.querySelector('h1').textContent = 'The Correct Answer Is'
      document.querySelector('.number').textContent = secretNumber
      document.querySelector('body').style.backgroundColor = 'red'
      document.querySelector('.number').style.width = '30rem'
    }
  } else if (guess === secretNumber) {
    // KETKA JAWABAN USER BENAR 
    document.querySelector('.message').textContent = '✔ Correct Number';
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('.highscore').textContent = number

    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
  }
})