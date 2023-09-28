//const all cards even if you only use 2 or 4 of them at first
const allCards = [
   {
   'name': 'K', clickable: true
   },
   {
   'name': 'K'
   },
  {
   'name': 'Fe'
  },
  {
   'name': 'Fe'
  },
// 'Fe',
// 'Iron',
// 'Na',
// 'Sodium',
// 'W',
// 'Tungsten',
// 'Cu',
// 'Copper',
// 'Ag',
// 'Silver',
// 'Au',
// 'Gold',
// 'Hg',
// 'Mercury',
// 'Sn',
// 'Tin',
// 'Pb',
// 'Lead',
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
//const scoreDisplay = document.getElementById(SCORE_DISPLAY_ID);
const scoreDisplay = document.getElementById(SCORE_DISPLAY_ID);
const winDisplay = document.getElementById('win-game')
// const restartButton = document.getElementById(RESTART_BUTTON_ID);

//Event Listeners
//attach click event listener to startButton and called initialize function 
startButton.addEventListener("click", initializeGame);
gameBoard.addEventListener("click", handleCardClick);
// restartButton.addEventListener("click", restartScreen);

//console.log(K)

// clicking a card
function handleCardClick(event){
   console.log(event.target)
  
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
   // cardsMatched++;
      score++;
      cardsFlipped.forEach(card => {
         console.log(card)
         card.style.backgroundColor = 'green';
      });
      console.log('its a match')
      //disable those card from being used again?
   } else {
   console.log('no match')
   }

   cardsFlipped = []
   render()
   console.log('next move')
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

// clicking restart/retry/replay
// function restartScreen() {
//    score = INITIAL_SCORE;
// cardsFlipped = [];
// startButton.disabled = false; 
// startButton.style.display = "none"
// gameBoard.innerHTML = ""
// //render cards
// renderCards();
// //call a render function
// render();
// }

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
   console.log("innerText")
   // Set the score display to the current score
   
   scoreDisplay.innerText = `Score: ${score}`; 

   // Create card 

   //createCards();
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




function resetEverything() {
  
   // Reset moves count and reset its inner HTML
   moves = 0;
   movesCount.innerHTML = 0;
   // Clear both arrays that hold the flipped and matched cards
   cardsMatched = [];
   cardsFlipped = [];
   // Clear the deck
   removeCard();
}

// function movesCounter() {
//    // Update the html for the moves counter
//    movesCount.innerHTML++;
//    // Keep track of the number of moves for every pair checked
//    moves++;
//  }


//define a renderCards function 
//loop over the constants card array 
//and for each card, create a new div element 
//set the innerText of the div element to the value of the element in the array 
//attach an on-click event listener to the element, define a callback function 
//append the element to the gameBoard 

//onCardClick()
//check if there are two elements already in the flippedCards array
//if so, compare the values
//if not, add the element 



// display start game screen img and start game button
// get all the card flip buttons
// get win message div
// get game-over screen display div
// start game with all cards facing down/blacked out,
// and game screen background displayed
// attach click event for each card
// console.log(countmatches);
// (do this last) start timer on first card click
// make sure cards dissappear when correctly matched
// increase score by 1 for each match
// if all cards are matched, display win message div
// else if timer runs out first, display game over div
// and display replay or retry prompt and 'thanks for playing' on screen