const rps = ['rock', 'paper', 'scissor'];

function getComuputerChoice(){
    let random = rps[Math.floor(Math.random() * rps.length)];
    console.log(random);
    return random;
}

function getHumanChoice(){
    let a = prompt("Enter your choice");
    console.log(a.toLowerCase());
    return a.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("Ups! its a tie");
        humanScore++;
        computerScore++;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissor') || 
        (humanChoice === 'scissor' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ){
        console.log(`Congratulations! You win, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`Oops.. Computer win, ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}   

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComuputerChoice();

        console.log(`Round ${i + 1}`);
        console.log(`Computer's score : ${computerScore}`);
        console.log(`Your Score: ${humanScore}`);

        playRound(humanSelection , computerSelection);
    }

    if(computerScore === humanScore){
        console.log(`Your Score: ${humanScore} and ComputerScore: ${computerScore} both are equla so its a tie.`);
    } else if (computerScore > humanScore){
        console.log(`Your Score: ${humanScore} is less than ComputerScore: ${computerScore} so computer wins the gane.`);
    } else{
        console.log(`Your Score: ${humanScore} is more than ComputerScore: ${computerScore} so, You won the game.`);
    }
}


playGame();
