function getComputerChoice() {
    computerChoice = ["Rock","Paper","Scissors"];
    choice=computerChoice[Math.floor(Math.random()*3)];
    return choice;
}
let playerCounter=0;
let computerCounter=0;

//let playerSelection = prompt("Enter your choice: ");
//let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1)==="Rock") {
        if (computerSelection ==="Rock") {
            alert("Draw");
        } else if (computerSelection ==="Paper") {
            alert("You lost");
            computerCounter = ++computerCounter;
        } else {
            alert("You won");
            playerCounter=++playerCounter;
        };
    } else if (playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1)==="Paper") {
        if (computerSelection ==="Paper") {
            alert("Draw");
        } else if (computerSelection ==="Scissors") {
            alert("You lost");
            computerCounter = ++computerCounter;
        } else {
            alert("You won");
            playerCounter=++playerCounter;
        };
    } else if (playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1)==="Scissors") {
        if (computerSelection ==="Scissors") {
            alert("Draw");
        } else if (computerSelection ==="Rock") {
            alert("You lost");
            computerCounter = ++computerCounter;
        } else {
            alert("You won");
            playerCounter=++playerCounter;
        };
    } else {
    alert("You didn't enter a valid input");
    };
    //if (true) {
    //playerSelection = prompt("Enter your choice: ");
    ////computerSelection = getComputerChoice();
    //};
    //if (true) {
    //    computerSelection = getComputerChoice();
    //}
};
  //let playerSelection = prompt("Enter your choice: ");
  //let computerSelection = getComputerChoice();
  //console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerSelection = prompt("Enter your choice: ");
    let computerSelection = getComputerChoice();

    playRound(playerSelection,computerSelection);

    if (computerCounter===3) {
        alert("Computer is the winner");
        computerCounter=0;
        playerCounter=0;
    } else if (playerCounter===3) {
        alert("You are the winner");
        computerCounter=0;
        playerCounter=0;
    };
}

