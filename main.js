let choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    let choice = (Math.round(Math.random() * 3))

    return choices[choice]
}


function getuserChoice() {
    let selection;
    do {
        selection = prompt("Please choose your weapon: Rock, Paper,siccors");
        selection = selection.charAt(0).toUpperCase() + selection.slice(1).toLocaleLowerCase();
        if (!choices.includes(selection)) {
            alert("Invalid choice. Please choose the correct one");
        }
    } while (!choices.includes(selection));
    return selection;
}

let userSelection = getuserChoice()
let computerSelection = getComputerChoice()


function playRound(userSelection, computerSelection) {
    
    switch (true) {
        case (userSelection === computerSelection):
            console.log(`Tie,You & computer selected  ${userSelection}`)
            break;
        case (userSelection == choices[0] && computerSelection == choices[2]):
        case (userSelection == choices[2] && computerSelection == choices[0]):
        case (userSelection == choices[1] && computerSelection == choices[0]):
            console.log(`You win , Your weapon ${userSelection} beats the computer's ${computerSelection} weapon`)
            break;
        case (true):
            console.log(`You were beaten by computer, computer weapon ${computerSelection} beats your weapon ${userSelection}`)
            break;
    }
}

playRound(userSelection, computerSelection)
