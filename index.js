
// select elements and data from html
var userInputGuess = document.querySelector('#guess');
var submitButton = document.querySelector('#submit');
var clearButton = document.querySelector('#clear');
var resetButton = document.querySelector('#reset');
var h3 = document.querySelector('#guess-feedback');

//generate random number
//set variables for high and low on Math, and parseInt
var randomNumber = function() {
  return parseInt(Math.floor(Math.random() * 100 + 1));
};
var resultRandomNumber = randomNumber();

//evaluate if number is too high/low or correct
//change console log to printing h1 and h3 on index.html
var guessFeedback = function() {
  if (userInputGuess.value > resultRandomNumber) {
    console.log('too high');
    h3.innerText = 'too high';
  } else if (userInputGuess.value < resultRandomNumber) {
    console.log('too low');
    h3.innerText = 'too low';
  } else {
    console.log('BOOM!');
    h3.innerText = 'BOOM!';
  }
} 

//Display user's guess and notify if number is too high/low or correct, when
//the user clicks submit

var refresh = function() {
  
};

document.body.onload = addNumberElement;
function addNumberElement() {
  var newH1 = document.createElement('h1');
  var newContent = document.createTextNode(userInputGuess.value);
  newH1.appendChild(newContent);
  var currentH1 = document.querySelector('#last-guess');
  document.body.insertBefore(newH1, currentH1);
};

document.body.onload = addFeedbackElement;
function addFeedbackElement() {
  var newH3 = document.createElement('h3');
  var newContent = document.createTextNode(guessFeedback());
  newH3.appendChild(newContent);
  var currentH3 = document.querySelector('#last-guess');
  document.body.insertBefore(newH3, currentH3);
};

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  // alert('You guessed ' + userInputGuess.value);
  console.log(randomNumber());
  // document.newNumberElement.innerHTML = userInputGuess.value;
  addNumberElement();
  // addFeedbackElement();
  guessFeedback();
}); 

