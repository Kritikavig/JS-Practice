//select elements from html

const submit = document.querySelector('#sub')
const userInput = document.querySelector('#guessField')
const prevGuess = document.querySelector('.prevGuess')
const remainGuess = document.querySelector('.remGuess')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.result')

let randomNumber = parseInt(Math.random()*100+1);
const p = document.createElement('p');

let prevGuessArr = []
let numberOfGuess = 1
let playGame = true

if(playGame)
{
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        const curGuess = parseInt(userInput.value)
        validateGuess(curGuess)
    })
}

function validateGuess(guess){

    if(isNaN(guess))
        alert('Give a valid number')

    else if(guess<1 || guess>100)
        displayMessage('Enter number between 1 - 100')

    else{
        //guess is within range
        prevGuessArr.push(guess)

        if(numberOfGuess==11)
        {
            displayGuess(guess)
            displayMessage(`Game over, random number is ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){

    if(guess===randomNumber)
    {
        displayMessage('You guessed it right, well done !!')
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage('Guessed it too low')
    }
    else if(guess>randomNumber){
        displayMessage('Guessed it too high')
    }
}

function displayGuess(guess){

    userInput.value = '' //empty input field
    prevGuess.innerHTML += `${guess} , `
    numberOfGuess ++
    remainGuess.innerHTML = 11 - numberOfGuess
}

function displayMessage(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){

    userInput.value=''
    userInput.setAttribute('disabled','')   //{key,value} pair
    
    p.classList.add('button')               //add class toh new element paragraph
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>'
    playGame = false
    startOver.appendChild(p)
    newGame()
} 

function newGame(){

    let newButton = document.querySelector('#newGame')

    newButton.addEventListener('click',(e)=>{

        randomNumber = parseInt(Math.random()*100+1);
        prevGuessArr = []
        numberOfGuess = 1
        prevGuess.innerHTML = ''
        remainGuess.innerHTML = `${11-numberOfGuess}`
        userInput.removeAttribute('disabled')

        startOver.removeChild(p)
        playGame = true

        displayMessage('New Game!')
    })
}

