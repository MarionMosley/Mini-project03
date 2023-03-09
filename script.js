var words = ['Bread','Jumping','Bicycle','Hamburger','Sandwich','Cactus','Helicopter'];
var wins = 0;
var losses = 0;
var timerEl = document.getElementById('countdown');
var word = document.getElementById('word');
var startButton = document.getElementById('startButton');
console.log('wins', wins, "losses", losses);



// Random array index selector
function getRandomItem(arr) {

    // get random index value
    var randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    var item = words[randomIndex];

    return item;
}


// Win game function
function winGame() {

}

// Lose game function
function loseGame() {

}


startButton.addEventListener('click', runGame);

function runGame() {

// Timer
function countdown() {
    var timeLeft = 30;
    timerEl.textContent = timeLeft + ' seconds remaining';
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
  
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else { 
        timerEl.textContent = '';
        clearInterval(timeInterval);
        loseGame();
      }
      
    },1000 );
  }

  countdown();


function chooseWord() {
    var guessWord = getRandomItem(words);
    word.textContent = guessWord;

}

chooseWord();

}