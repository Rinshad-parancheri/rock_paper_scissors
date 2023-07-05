let choices = ['Rock', 'Paper', 'Scissors']
 //i have to computer choice first which will play 3 round;this is function
function getComputerChoice() {
    let choice = (Math.round(Math.random()*3))
   
   return choices[choice]
}

// prompt for the user choice and return it 
function getuserChoice() {
   let selection;
do {
    selection = prompt("Please choose your weapon: Rock, Paper,siccors");
    selection = selection.charAt(0).toUpperCase() + selection.slice(1);
    if (!choices.includes(selection)) {
        alert("Invalid choice. Please choose the correct one");
      }
  } while (!choices.includes(selection));
  return selection;
}
let userSelection = getuserChoice()
let computerSelection = getComputerChoice()
console.log(userSelection)
console.log(computerSelection)

