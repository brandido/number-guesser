
var userInputGuess = document.querySelector('#guess');
var submitButton = document.querySelector('#submit');
var showNumber = document.querySelector('#show-number');
var showGuessFeedback = document.querySelector('#guess-feedback');
var clearButton = document.querySelector('#clear');
var resetButton = document.querySelector('#reset');

var randomNumber = function() {
  console.log('returning randomNumber');
  return parseInt(Math.floor(Math.random() * 100 + 1));
};
var resultRandomNumber = randomNumber();
var guessFeedback = function() {
  if (parseInt(userInputGuess.value) > resultRandomNumber) {
    showGuessFeedback.innerText = 'That is too high';
  } else if (parseInt(userInputGuess.value) < resultRandomNumber) {
    showGuessFeedback.innerText = 'That is too low';
  } else {
    showGuessFeedback.innerText = 'BOOM!';
  }
} 

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(resultRandomNumber);
  showNumber.innerText = userInputGuess.value;
  guessFeedback();
}); 

resetButton.addEventListener('click', function(event) {
  event.preventDefault();
      userInputGuess.value = '';
      showNumber.innerText = '#';
      resultRandomNumber = randomNumber();
      console.log(resultRandomNumber);
});

clearButton.addEventListener('click', function(event) {
  event.preventDefault();
  userInputGuess.value = '';
});
