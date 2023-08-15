document.getElementById('submitGuess').addEventListener('click', function () {
    const userBet = parseInt(document.getElementById('userBet').value);
    if (isNaN(userBet) || userBet <= 0) {
      alert('Invalid bet. Please enter a valid bet amount.');
      return;
    }
  
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const userGuess = parseInt(document.getElementById('userGuess').value);
    let message;
  
    if (userGuess < 1 || userGuess > 100) {
      message = 'Invalid input. Please enter a number between 1 and 100.';
    } else if (userGuess === randomNumber) {
      const winnings = userBet * 2; // User wins double their bet
      message = `Congratulations! You guessed the correct number and won ${winnings} coins!`;
    } else if (userGuess < randomNumber) {
      message = `Your guess is too low. The correct number was ${randomNumber}.`;
    } else {
      message = `Your guess is too high. The correct number was ${randomNumber}.`;
    }
  
    document.getElementById('message').textContent = message;
  
    setTimeout(function () {
      const playAgain = confirm('Do you want to play again?');
      if (playAgain) {
        document.getElementById('userBet').value = ''; // Clear previous bet
        document.getElementById('userGuess').value = ''; // Clear previous guess
        document.getElementById('message').textContent = ''; // Clear previous message
      }
    }, 10);
  });
  