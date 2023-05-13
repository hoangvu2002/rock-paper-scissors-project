let playerCounter=0;
let computerCounter=0;



const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", () => playRound("Rock", getComputerChoice()));

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", () => playRound("Paper", getComputerChoice()));

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", () => playRound("Scissors", getComputerChoice()));

div = document.querySelector("#result");
div.textContent = "";

const playerResult = document.createElement("p");
playerResult.textContent = `${playerCounter}`;
div.appendChild(playerResult);

const computerResult = document.createElement("p");
computerResult.textContent = `${computerCounter}`;
div.appendChild(computerResult);

if (computerCounter===5) {
    div.textContent = "Computer is the winner";
    computerCounter=0;
    playerCounter=0;
} else if (playerCounter===5) {
    div.textContent="You are the winner";
    computerCounter=0;
    playerCounter=0;
};


function getComputerChoice() {
    computerChoice = ["Rock","Paper","Scissors"];
    choice=computerChoice[Math.floor(Math.random()*3)];
    return choice;
}


//let playerSelection = prompt("Enter your choice: ");
//let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1).toLowerCase()==="Rock") {
        if (computerSelection ==="Rock") {
            div.textContent=`Draw 
            Player score:${playerCounter} Computer score: ${computerCounter}`;
        } else if (computerSelection ==="Paper") {
            div.textContent=`You lost! 
            Player score:${playerCounter} Computer score: ${computerCounter}`;
            computerCounter = ++computerCounter;
        } else {
            div.textContent=`You won! 
            Player score:${playerCounter} Computer score: ${computerCounter}`;
            playerCounter=++playerCounter;
        };
    } else if (playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1).toLowerCase()==="Paper") {
        if (computerSelection ==="Paper") {
            div.textContent=`Draw 
            Player score:${playerCounter} Computer score: ${computerCounter}`;
        } else if (computerSelection ==="Scissors") {
            div.textContent=`You lost! 
            Player score:${playerCounter} Computer score: ${computerCounter}`;
            computerCounter = ++computerCounter;
        } else {
            div.textContent=`You won! 
            Player score:${playerCounter} Computer score: ${computerCounter}`;
            playerCounter=++playerCounter;
        };
    } else if (playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1).toLowerCase()==="Scissors") {
        if (computerSelection ==="Scissors") {
            div.textContent=`Draw 
            Player score:${playerCounter} Computer score: ${computerCounter}`;
        } else if (computerSelection ==="Rock") {
            div.textContent=`You lost! 
            Player score:${playerCounter} Computer score: ${computerCounter}`;
            computerCounter = ++computerCounter;
        } else {
            div.textContent=`You won! 
            Player score:${playerCounter} Computer score: ${computerCounter}`;
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

    if (computerCounter===1) {
        alert("Computer is the winner");
        computerCounter=0;
        playerCounter=0;
    } else if (playerCounter===1) {
        alert("You are the winner");
        computerCounter=0;
        playerCounter=0;
    };
    //I change the condition from 3 to 1 so that this game only play one round
};

