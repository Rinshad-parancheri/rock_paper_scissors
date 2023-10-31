class RockPaperScissorsGame {
  constructor(rounds = 5) {
    this.NUMBER_OF_ROUNDS = rounds;
    this.round = 0;
    this.userScore = 0;
    this.computerScore = 0;
    this.choices = ['Rock', 'Paper', 'Scissors'];
    this.gameUI = new GameUI();
    this.gameUI.setupEventListeners(this.playRound.bind(this));
  }

  playRound(userSelection) {
    if (this.round < this.NUMBER_OF_ROUNDS) {
      this.round++;
      const computerSelection = this.getComputerChoice();
      const result = this.determineWinner(userSelection, computerSelection);
      this.updateScores(result);
      this.gameUI.displayRoundResult(result, userSelection, computerSelection, this.round);
    } else {
      const gameResult = this.determineGameWinner();
      this.gameUI.displayGameWinner(gameResult);
    }
  }

  getComputerChoice() {
    const choice = Math.floor(Math.random() * this.choices.length);
    return this.choices[choice];
  }

  determineWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) return 'tie';
    if (
      (userSelection === 'Rock' && computerSelection === 'Scissors') ||
      (userSelection === 'Scissors' && computerSelection === 'Paper') ||
      (userSelection === 'Paper' && computerSelection === 'Rock')
    ) {
      return 'You';
    }
    return 'Computer';
  }

  updateScores(result) {
    result === 'You' ? this.userScore++ : result === 'Computer' ? this.computerScore++ : null;
    this.gameUI.updateScores(this.userScore, this.computerScore);
  }

  determineGameWinner() {
    return this.userScore > this.computerScore ? 'You' : this.userScore < this.computerScore ? 'Computer' : 'Tie';
  }
}

class GameUI {
  constructor() {
    this.playerScoreBoard = document.getElementById("playerScore");
    this.computerScoreBoard = document.getElementById("computerScore");
    this.roundDisplay = document.getElementById("round_nos");
    this.display = document.getElementById("round_details");
    this.userComputerSelection = document.querySelector(".user_computer_selection");
    this.userSelectionDisplay = document.getElementById("user_selection");
    this.computerSelectionDisplay = document.getElementById("computer_selection");
    this.roundWinnerContainer = document.querySelector(".round_winner");
    this.roundWinnerDisplay = document.getElementById("round_winner");
    this.finalWinnerContainer = document.getElementById("winner_of_game");
    this.finalWinner = document.getElementById("finalWinner");
  }

  setupEventListeners(playRound) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('click', event => {
        const selectedText = event.target.innerText;
        if (selectedText) {
          playRound(selectedText);
        }
      });
    });
  }

  updateScores(userScore, computerScore) {
    this.playerScoreBoard.innerText = userScore;
    this.computerScoreBoard.innerText = computerScore;
  }

  displayRoundResult(result, userSelection, computerSelection, round) {
    this.roundDisplay.innerText = round;
    this.userSelectionDisplay.innerText = userSelection;
    this.userComputerSelection.style.display = 'block';
    this.computerSelectionDisplay.innerText = computerSelection;
    this.roundWinnerContainer.style.display = 'block';
    this.roundWinnerDisplay.innerText = (result == 'You' || result == 'Computer')?`${result} won round ${round}`:`Round ${round} is a Tie`
  }

  displayGameWinner(gameResult) {
    this.finalWinnerContainer.style.display = 'block';
    this.display.style.display = 'none';
    this.finalWinner.innerText = (gameResult === 'You' || gameResult === 'Computer') ? `${gameResult} won the game` : "It's a tie";
  }
}

window.onload = () => new RockPaperScissorsGame();
