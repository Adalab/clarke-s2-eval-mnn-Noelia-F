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
	currentValue: 1,
};

function generateRandomNumber(min, max){
	newRandomNumber = (Math.ceil(Math.random()*(max-min)))+min;
	return newRandomNumber;
}
var randomNumber = generateRandomNumber(1, 100);

function sendNumber() {
	selectNumber.value = parseInt(selectNumber.value);
		if (selectNumber.value == randomNumber) {
			textAlert.innerHTML = "Acertado";
			form.classList.remove('hidden');
		} else if (selectNumber.value < randomNumber) {
			textAlert.innerHTML = "Número demasiado bajo";
		} else {
			textAlert.innerHTML = "Número demasiado alto";
		}
}

function startCount() {
	var incrementCounter = counter.currentValue++;
	newTry.innerHTML = incrementCounter;
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

function resetGame() {
	form.classList.add('hidden');
	textAlert.innerHTML = 'Escribe un número y dale a <em>Prueba</em>';
}
function resetCounter() {
	counter.reset = function() {
	counter.currentValue= counter.initialValue + 1;
	}
	counter.reset();
	newTry.innerHTML = 0;
}
function resetRandomNumber() {

}
console.log(randomNumber);


buttonTry.addEventListener('click', sendNumber);
buttonTry.addEventListener('click', startCount);
buttonScore.addEventListener('click', sendInfoScore);
buttonScore.addEventListener('click', resetGame);
buttonScore.addEventListener('click', resetCounter);
buttonScore.addEventListener('click', resetRandomNumber);
