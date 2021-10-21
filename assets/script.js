var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-btn");
var resetButton = document.querySelector(".reset-button");


var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];//spells out how many characters long the randomly chosen word will be
var blanksLetters = []; //same but for blanks to display on the screen
// Array of words the user will guess
var wordList = ["variable","array", "modulus", "object", "function", "string", "boolean"];


// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame());

function regexFilter(char){ //filters through the word
    return char.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').toLowerCase()
}

function replace(c, a) {
	var regex = new RegExp("[^ " + a + "]", 'ig');
	return c.replace(regex, "_");
}

$(.start-btn).click(function() {
    //reset variables
    show = "aeiou";
    triesLeft = 5;
    gameEnded = false;
})

//Reset Keyboard
// $("#keyboard").html('<div><span id="a" class="vowel">a</span><span id="b">b</span><span id="c">c</span><span id="d">d</span><span id="e" class="vowel">e</span><span id="f">f</span><span id="g">g</span><span id="h">h</span><span id="i" class="vowel">i</span><span id="j">j</span><span id="k">k</span><span id="l">l</span><span id="m">m</span></div><div><span id="n">n</span><span id="o" class="vowel">o</span><span id="p">p</span><span id="q">q</span><span id="r">r</span><span id="s">s</span><span id="t">t</span><span id="u" class="vowel">u</span><span id="v">v</span><span id="w">w</span><span id="x">x</span><span id="y">y</span><span id="z">z</span></div>');

//Get random category
id = $(this).attr("id");
random = Math.floor(Math.random() * 5);
word = wordList[id][random];
chosenWord = $(this).html();
// Calls init() so that it fires when page opened
init();

// The init function is called when the page loads 
function init() {
    getWins();
    getlosses();
  }
  
  // The startGame function is called when the start button is clicked
  function startGame() {
    isWin = false;
    timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks();//WHEN the user clicks "Start", call renderBlanks() function and display blanks on page.
    startTimer();//start the ten-second countdown.
  }
