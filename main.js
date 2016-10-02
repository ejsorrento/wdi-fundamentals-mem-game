
// Cards indentities
 var cards = ['queen', 'queen', 'king', 'king'];
// array tells which cards are in play
 var cardsInPlay = [];
// function that creates board
 function createBoard() {
// find board and set it to variable,  add cards to it
 var board = document.getElementsByClassName('board')[0];
// loop through cards array to create card elements for board
for (var i=0; i<cards.length; i++); {
// create div element to be used as card
   var cardElement = document.createElement('div');
// add class to card element to help link styling
  cardElement.className = 'cards';
// will set the card's innerHTML to element of array.   
  cardElement.innerHTML = cards[i];
// when card is clicked, function isTwoCards will execute
  cardElement.addEventListener('click', isTwoCards)
// append the card to board
   board.appendChild(cardElement);
 }
}
//checks for active cards
 function isTwoCards() {
// adds card to array being viewed
// 'this' not in pre-work but
// just know it gives access to cardElement clicked on
 cardsInPlay.push(this.innerHTML)
// if two cards in play check for match
 if (cardsInPlay.length === 2) {
// pass cardsInPlay as argument to isMatch function
   isMatch(cardsInPlay);
// clear cards in play array for next try
     cardsInPlay = [];
 }
 }
 function isMatch(cards) {
// winning message alert
 if (cards[0] === cards[1]) {
     alert("You found a match!");
 } else {
  alert("Sorry, try again.");
}
 }
// run createBoard function
 createBoard();
