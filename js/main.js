'use strict'

var randomNumber=5;
var selectNumber = document.querySelector('.number');
var button = document.querySelector('.try-btn');
var textAlert = document.querySelector('.guess-text');
var newTry = document.querySelector('.tries');
selectNumber.value = parseInt(selectNumber.value);

function sendNumber() {
		if (selectNumber.value == randomNumber) {
			textAlert.innerHTML = "Acertado";
		} else if (selectNumber.value < randomNumber) {
			textAlert.innerHTML = "Número demasiado bajo";
		} else {
			textAlert.innerHTML = "Número demasiado alto";
		}
}


button.addEventListener('click', sendNumber, generateRandomNumber);
