const compChoice = document.getElementById('computer-choice')
const playerChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const buttons = document.querySelectorAll('button')
const compScore = document.getElementById('computer-score')
const userScore = document.getElementById('user-score')
const winner = document.getElementById('winner')
const restart = document.querySelector('.restart')
let userSelection;
let computerSelection = getComputerChoice();
let userCount = 0;
let compCount = 0;


buttons.forEach(button => button.addEventListener('click', (e) => {
        userSelection = e.target.id;
        playerChoice.innerHTML = userSelection;
        
        playRound(userSelection, getComputerChoice())
        gameWon()
       
        }))
    

function getComputerChoice() {
    let choice = Math.floor((Math.random()) * 3)
        if (choice == 0) {
            choice = 'rock';
        } else if (choice == 1) {
            choice = 'paper';
        } else if (choice == 2) {
            choice = 'scissors';
        }
        return choice
        }

     

function playRound(userSelection, computerSelection) {
        let result;
        
   
    if (userSelection === computerSelection) {
            
            result = `You tied! ${userSelection} ties ${computerSelection}` 
            
        
    } if ((userSelection === 'rock' && computerSelection === 'paper') ||
          (userSelection === 'paper' && computerSelection === 'scissors') ||
          (userSelection === 'scissors' && computerSelection === 'rock')) {
        
            compCount++
            result = `You lose! ${computerSelection} beats ${userSelection}`
        
    } if ((userSelection === 'rock' && computerSelection === 'scissors') ||
          (userSelection === 'paper' && computerSelection === 'rock') ||
          (userSelection === 'scissors' && computerSelection === 'paper')){
            
            userCount++
            result = `You win! ${userSelection} beats ${computerSelection}`
    }
    resultDisplay.innerHTML = result
    compScore.innerHTML = compCount;
    userScore.innerHTML = userCount;
    compChoice.innerHTML = computerSelection;
}

function gameWon() {
    if (userScore.innerText == 5) {
        winner.innerHTML = 'You won the game!'
        resultDisplay.innerHTML = '';
        compScore.innerHTML = '';
        userScore.innerHTML = '';
        playerChoice.innerHTML = '';
        compChoice.innerHTML = '';
        
    } else if (compScore.innerText == 5) {
        winner.innerHTML = 'You lost the game'
        resultDisplay.innerHTML = '';
        compScore.innerHTML = '';
        userScore.innerHTML = '';
        playerChoice.innerHTML = '';
        compChoice.innerHTML = '';
    }
}

restart.addEventListener('click', () => {
    userCount = 0
    compCount = 0
    winner.innerHTML = ''
    
})


console.log(getComputerChoice())



