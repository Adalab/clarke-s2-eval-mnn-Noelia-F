'use strict'

var randomNumber = 5;
var selectNumber = document.querySelector('.number');
var button = document.querySelector('.try-btn');
var textAlert = document.querySelector('.guess-text');
var newTry = document.querySelector('.tries');
function sendNumber() {
		if (selectNumber.value === randomNumber) {
			textAlert.innerHTML = "Acertado";
		} else if (number < randomNumber) {
			textAlert.innerHTML = "Número demasiado bajo";
		} else {
			textAlert.innerHTML = "Número demasiado alto";
		}
}

function addTries(){
	newTry.innerHTML = newTry++;
}

button.addEventListener('click', sendNumber);
button.addEventListener('click', addTries);
