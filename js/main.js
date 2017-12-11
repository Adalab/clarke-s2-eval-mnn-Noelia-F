'use strict';

var newRandomNumber;
var selectNumber = document.querySelector('.number');
var buttonTry = document.querySelector('.try-btn');
var textAlert = document.querySelector('.guess-text');
var newTry = document.querySelector('.tries');
var form = document.querySelector('.name-ranking');
var nameScore= document.querySelector('.name');
var buttonScore = document.querySelector('.save-score');
var listScore = document.querySelector('.score-list');
var counter = {
	initialValue: 0,
};

function generateRandomNumber(min, max){
	newRandomNumber = (Math.ceil(Math.random()*(max-min)))+min;
	return newRandomNumber;
}
var randomNumber = generateRandomNumber(1, 100);

function sendNumber() {
		var selectNumber = document.querySelector('.number').value;
		selectNumber = parseInt(selectNumber);
		if (selectNumber === randomNumber) {
			textAlert.innerHTML = "Acertado";
			form.classList.remove('hidden');
		} else if (selectNumber < randomNumber) {
			textAlert.innerHTML = "Número demasiado bajo";
		} else {
			textAlert.innerHTML = "Número demasiado alto";
		}
}

function startCount() {
	counter.currentValue = (counter.initialValue++) +1;
	newTry.innerHTML = counter.currentValue;
}

function infoScore(name, score) {
	this.nam = name;
	this.scor = score;
}

function sendInfoScore() {
	var nameSend = nameScore.value;
	var scoreSend = counter.currentValue;
	var printScore = new infoScore (nameSend, scoreSend);
	console.log(printScore.nam);
	listScore.innerHTML += '<li>' + printScore.nam + ' - ' + printScore.scor + ' intentos</li>';
	return printScore;
}

function clear() {
	form.classList.add('hidden');
	textAlert.innerHTML = 'Escribe un número y dale a <em>Prueba</em>';
}

function resetGame() {
	clear();
	counter.reset = function() {
		counter.initialValue = 0;
		newTry.innerHTML = counter.initialValue;
	}
	counter.reset();
	selectNumber.value = '';
	nameScore.value = '';
	randomNumber = generateRandomNumber(1, 100);
	console.log(randomNumber);
}

console.log(randomNumber);


buttonTry.addEventListener('click', sendNumber);
buttonTry.addEventListener('click', startCount);
buttonScore.addEventListener('click', sendInfoScore);
buttonScore.addEventListener('click', resetGame);
