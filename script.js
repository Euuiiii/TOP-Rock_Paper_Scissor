    const rps = ['rock', 'paper', 'scissor'];

    function getComputerChoice(){
        let random = rps[Math.floor(Math.random() * rps.length)];
        return random;
    }

    let humanScore = 0;
    let computerScore = 0;

    let results = document.querySelector("#results");
    let scores = document.querySelector("#scoreCard");
    let winner = document.querySelector("#announcement");
    let buttons = document.querySelectorAll('button');

    function disableButtons(){
        buttons.forEach((button) => {
            button.disabled = true;
        })
    }

    function playRound(humanChoice, computerChoice){

        if(humanScore >= 5 || computerScore >= 5) return;
        
        results.textContent = '';
        let resMsg = document.createElement('div');

        if(humanChoice === computerChoice){
            resMsg.textContent = "Ups! its a tie";
            humanScore++;
            computerScore++;
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissor') || 
            (humanChoice === 'scissor' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ){
            resMsg.textContent = `Congratulations! You win, ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else {
            resMsg.textContent = `Oops.. Computer win, ${computerChoice} beats ${humanChoice}`; 
            computerScore++;
        }

        results.appendChild(resMsg);

        scores.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

        if(humanScore === 5){
            winner.textContent = "Congratulations you won the game!";
        } else if(computerScore === 5){
            winner.textContent = "Oops! you lose the game computer wins...";
        }
    }   

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = button.id;
            const computerSelection = getComputerChoice();

            playRound(playerSelection, computerSelection);
        })
    })
