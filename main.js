const ROCK_BTN = document.getElementById("rock");
const PAPER_BTN = document.getElementById("paper");
const SCISSORS_BTN = document.getElementById("scissors");
const PLAYER_SCORE_BOARD = document.getElementById("playerScore");
const COMPUTER_SCORE_BOARD = document.getElementById("computerScore");
const ROUND_DISPLAY =  document.getElementById("round_nos");
const DISPLAY = document.querySelector("#round_details");
const USER_COMPUTER_SELECTION = document.querySelector(".user_computer_selection");
const USER_SELECTION_DISPLAY = document.getElementById("user_selection");
const COMPUTER_SELECTION_DISPLAY =document.getElementById("computer_selection");
const ROUND_WINNER =    document.querySelector(".round_winner");
const round_winner = document.getElementById("round_winner");
const FINAL_WINNER_CONTIANER  =  document.getElementById("winner_of_game");
const FINAL_WINNER = document.getElementById("finalWinner");


const CHOICES = ['Rock', 'Paper', 'Scissors']
const NUMBER_OF_ROOUNDS = 5;

let round = 0;
let userScore = 0;
let computerScore = 0;

ROCK_BTN.addEventListener("click", ()=>{
    userSelection = 'Rock'; 
    playRound(userSelection);
})

PAPER_BTN.addEventListener("click", ()=> {
    userSelection = 'Paper';
    playRound(userSelection);
})

SCISSORS_BTN.addEventListener("click",()=> {
    userSelection = 'Scissors';
    playRound(userSelection);
})


function getComputerChoice() {
    let choice = (Math.floor(Math.random() * 3))
    return CHOICES[choice]
}




function playRound(userSelection) {

if (round < NUMBER_OF_ROOUNDS){
    let computerSelection = getComputerChoice();
     round++;
     
     USER_SELECTION_DISPLAY.innerText = userSelection;
     COMPUTER_SELECTION_DISPLAY.innerText = computerSelection;
    
    
     displayRoundMatch();
     ROUND_DISPLAY.innerText = round;
     switch (true) {
         case (userSelection === computerSelection):
             console.log(`Tie,You & computer selected  ${userSelection}`);
             winnerOfRound('tie')
             break;
         case (userSelection == CHOICES[0] && computerSelection == CHOICES[2]):
         case (userSelection == CHOICES[2] && computerSelection == CHOICES[0]):
         case (userSelection == CHOICES[1] && computerSelection == CHOICES[0]):
             console.log(`You win , Your weapon ${userSelection} beats the computer's ${computerSelection} weapon`)
             userScore++; 
             PLAYER_SCORE_BOARD.innerText = userScore;
             winnerOfRound('You');
             break;
         case (true):
             console.log(`You were beaten by computer, computer weapon ${computerSelection} beats your weapon ${userSelection}`);
             computerScore++;
             COMPUTER_SCORE_BOARD.innerText = computerScore;
             winnerOfRound('Computer');
             break;
     }
}else {
    determineWinner();
}

}

function displayRoundMatch() {
 USER_COMPUTER_SELECTION.style.display = 'block';   
}

function winnerOfRound(winner) {
    ROUND_WINNER.style.display = 'block'
    if (winner == 'tie'){
      round_winner.innerHTML = `It's a tie`;
    }else {
        round_winner.innerText = `The winner of round ${round} is ${winner}`
    } 
}
 
function determineWinner() {
    let winner = ''    
    if (userScore > computerScore) {
        winner = 'You';
    } else if (userScore < computerScore) {
        winner = 'Computer';
    } else {
        winner = 'Tie';
    }
    displayWinner(winner);
}

function displayWinner(winner) {
    FINAL_WINNER_CONTIANER.style.display = 'block';
    DISPLAY.style.display = 'none'
    if (winner == 'You' || 'Computer'){
        
        FINAL_WINNER.innerHTML = `${winner} won the game`;

    } else {
        FINAL_WINNER.innerText  = `It's a tie`;
    }
}