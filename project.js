//const all cards even if you only use 2 or 4 of them at first
const allCards = [
   {'name': 'K'},
   {'name': 'K'},
   {'name': 'Fe'},
   {'name': 'Fe'},
   {'name': 'Na'},
   {'name': 'Na'},
   {'name': 'W'},
   {'name': 'W'},
   {'name': 'Cu'},
   {'name': 'Cu'},
   {'name': 'Ag'},
   {'name': 'Ag'},
   {'name': 'Au'},
   {'name': 'Au'},
   {'name': 'Hg'},
   {'name': 'Hg'},
   {'name': 'Sn'},
   {'name': 'Sn'},
   {'name': 'Pb'},
   {'name': 'Pb'},
]

// state variables and constants
const INITIAL_SCORE = 0;
const WINNING_SCORE = allCards.length / 2;
const START_BUTTON_ID = "start-button";
const GAME_BOARD_ID = "game-board";
const SCORE_DISPLAY_ID = "score";
// const RESTART_BUTTON_ID = "restart";
let score;
let cardsFlipped;
let cardsMatched;
let countdown;

// Cached Elements

//get start button by id and assign to a variable called startButton
const startButton = document.getElementById(START_BUTTON_ID);
//get game board by id and assign to a variable called gameBoard
const gameBoard = document.getElementById(GAME_BOARD_ID);
//get the score by id and (You need to make a div with id of score)
const scoreDisplay = document.getElementById(SCORE_DISPLAY_ID);
const winDisplay = document.getElementById('win-game')

//Event Listeners

//attach click event listener to startButton and called initialize function 
startButton.addEventListener("click", initializeGame);
gameBoard.addEventListener("click", handleCardClick);

// clicking a card
function handleCardClick(event){
   if (event.target.classList.contains('clicked')) {
      
      return
   }
   cardsFlipped.push(event.target)
   if (cardsFlipped.length === 2){
       checkmatched();
   }
   event.target.classList.add('clicked')
   checkWinner();
}
function checkmatched() {
   if (cardsFlipped[0].innerText === cardsFlipped[1].innerText) {
      score++;
      cardsFlipped.forEach(card => {
      card.style.backgroundColor = 'green';
      });
   } else {
   }
   let clickedEls = document.querySelectorAll('.clicked')
   clickedEls.forEach(el => {
   el.classList.remove('clicked')
   })
   cardsFlipped = []
   render()
}

//check for win
function checkWinner() {
   if (score === WINNING_SCORE) {
      winDisplay.innerText = 'you win'
      startButton.innerText = 'restart'
      startButton.style.display = "inline" 
      startButton.disabled = false; 
   }
}

// Functions

//define initialize function 
function initializeGame(){
score = INITIAL_SCORE;
cardsFlipped = [];
startButton.disabled = true; 
startButton.style.display = "none"
gameBoard.innerHTML = ""
//render cards
renderCards();
//call a render function
render();
};

function renderCards() {
   allCards.forEach(card => {
   let cardEl = document.createElement('div')
   cardEl.innerText = card.name
   gameBoard.append(cardEl)
   })
}



// Invoke shuffle function and store in variable
// Randomize array in-place using Durstenfeld shuffle algorithm
function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
       let j = Math.floor(Math.random() * (i + 1));
       let temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }
}

//define render function
function render(){
   scoreDisplay.innerText = `Score: ${score}`; 
};


// function timer() {
//    // Update the count every 1 second
//    time = setInterval(function () {
//      seconds--;
//      if (seconds === 0) {
//        //game over display;
//        seconds = 250;
//      }
//    })
// };

// start game with all cards facing down/blacked out,
//(do this last) start timer on first card click
// make sure cards dissappear when correctly matched
// else if timer runs out first, display game over div
// and display replay or retry prompt and 'thanks for playing' on screen