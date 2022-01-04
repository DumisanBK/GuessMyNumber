'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 50;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

const displayMessage = function (message) {
  return message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (guess === secretNumber) {
    displayMessage('💯 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('🤯 Too high ');
         score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('📈 You lost the ga)me ';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('📉 Too low ');
        score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤯 You lost the game ');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

let r = (Math.random() + 1).toString(36).substring(3);
console.log('random', r.toUpperCase());

function getTransactionType(transactionType) {
  if (transactionType === 1) {
    return 'Water Deposits';
  } else if (transactionType === 2) {
    return 'New Water Connections';
  } else if (transactionType === 3) {
    return 'Water Rates Receipts';
  } else if (transactionType === 4) {
    return 'Payment Penalty';
  } else if (transactionType === 5) {
    return 'Customer Statement Fees';
  } else if (transactionType === 6) {
    return 'Broken Meter Replacement';
  } else if (transactionType === 7) {
    return 'Change of Tenancy Fees';
  } else if (transactionType === 8) {
    return 'Water Reconnection Fee';
  }
}

console.log(getTransactionType(4));
