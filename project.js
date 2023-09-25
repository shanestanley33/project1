//const all cards even if you only use 2 or 4 of them at first
const allCards = [
   'a',
   'a',
// 'K',
// 'Potassium',
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

// state variables
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
score = 0;
flippedCards = [];
startButton.disabled = true; 
startButton.style.display = "none"
gameBoard.innerHTML = ""
//call a render function
render();
}

//define render function
function render() {

}
//set the scoreDisplay to the current score variable
//create cards renderCards()

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