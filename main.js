 //i have to computer choice first which will play 3 round;this is function
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors']
    let choice = (Math.round(Math.random()*3))
    console.log(choices[choice])

}

getComputerChoice()
//i have to prompt for the user choice second within function and return  this is another function
//i have to compare computer choice and user choice to determine the each round result
// thne i have to show who won the game 