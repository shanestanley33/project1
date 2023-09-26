//const all cards even if you only use 2 or 4 of them at first
const allCards = [
   {
'name': 'K',
'subName': 'K',
   },
   {
'name': 'K',
'subName': 'Potassium'
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
const WINNING_SCORE = 1;
const START_BUTTON_ID = "start-button";
const GAME_BOARD_ID = "game-board";
const SCORE_DISPLAY_ID = "score";
let score;
let cardsFlipped;
let countdown;

// Cached Elements
//get start button by id and assign to a variable called startButton
const startButton = document.getElementById(START_BUTTON_ID);
//get game board by id and assign to a variable called gameBoard
const gameBoard = document.getElementById(GAME_BOARD_ID);
//get the score by id and (You need to make a div with id of score)
const scoreDisplay = document.getElementById(SCORE_DISPLAY_ID);


//Event Listeners
//attach click event listener to startButton and called initialize function 
startButton.addEventListener("click", initializeGame);
// clicking a card

// clicking restart/retry/replay

// Functions
//define initialize function 
function initializeGame(){
score = INITIAL_SCORE;
cardsFlipped = [];
startButton.disabled = true; 
startButton.style.display = "none"
gameBoard.innerHTML = ""
//call a render function
render();
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
   console.log("I'm in the render function")
   // Set the score display to the current score
   scoreDisplay.innerText = `Score: ${score}`; 
   // Create card 
   createCards();
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

//create cards renderCards();

// function createCardPair(){
//    // Remove all existing tiles on the game board
//    gameBoard.innerHTML = "";
//    // Create variables for tile1 and tile2
//    allCards[0];
//    allCards[1];   
//    // Do some code while a certain condition is true
//    do {
//        // Call a helper function to create a game tile and assign to tile1
//        allCards[0]
//        = createGameCard();
//        // Call a helper function to create a game tile and assign to tile2
//        allCards[1] = createGameCard();
//        // While the innerText of tile 1 is not equal to the innerText of tile 2
//    } while (tile1.innerText === tile2.innerText);
//    // Append the new tiles to the game board
//    gameBoard.append(tile1, tile2)
// };


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



// 1. display start game screen img and start game button
// get all the card flip buttons
// get win message div
// get game-over screen display div
// 2. start game with all cards facing down/blacked out,
// and game screen background displayed
// attach click event for each card
// console.log(countmatches);
// (do this last) start timer on first card click
// make sure cards dissappear when correctly matched
// increase score by 1 for each match
// if all cards are matched, display win message div
// else if timer runs out first, display game over div
// and display replay or retry prompt and 'thanks for playing' on screen