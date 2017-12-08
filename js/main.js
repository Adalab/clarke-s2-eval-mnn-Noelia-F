'use strict'
var selectNumber = document.querySelector('.number');
var button = document.querySelector('.try-btn');
var textAlert = document.querySelector('.guess-text');
var newTry = document.querySelector('.tries');
var randomNumber = (Math.round(Math.random()*100))+1;

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


var counter = {
	initialValue: 1,
};
function startCount() {
	counter.currentValue= counter.initialValue ++;
	newTry.innerHTML = counter.currentValue;
}

button.addEventListener('click', sendNumber);
button.addEventListener('click', randomNumber);
button.addEventListener('click', startCount);
