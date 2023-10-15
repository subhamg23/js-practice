## Project 1

```Javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})
```

## Project 2
```Javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please input a valid height`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please input a valid height`;
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi < 18.6){
      result.innerHTML = `<span>${bmi}</span> <br>
      <span>Under Weight </span>`
    }
    else if(bmi > 18.6 && bmi <= 25.5){
      result.innerHTML = `<span>${bmi}</span> <br>
      <span>Normal Weight </span>`
    }
    else{
      result.innerHTML = `<span>${bmi}</span> <br>
      <span>Over Weight </span>`
    }
  }
});
```

## Project 3

```Javascript
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```

## Project 4
```Javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const reamining = document.querySelector('.lastResult');
const loOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Enter a valid guess`);
  } else if (guess < 1) {
    alert(`Enter a value grater than 1`);
  } else if (guess > 100) {
    alert(`Enter a value lesser than 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over Random Number : ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  console.log(numGuess)
  reamining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  loOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled' ,'')
  p.classList.add('button')
  p.innerHTML = `<h2 id = newGame>Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}
function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = ''
    reamining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true

  })
}

```