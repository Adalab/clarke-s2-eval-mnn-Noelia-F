'use strict';

var randomNumber;
var selectNumber = document.querySelector('.number');
var buttonTry = document.querySelector('.try-btn');
var textAlert = document.querySelector('.guess-text');
var newTry = document.querySelector('.tries');
var form = document.querySelector('.name-ranking');
var nameScore= document.querySelector('.name');
var buttonScore = document.querySelector('.save-score');
var listScore = document.querySelector('.score-list');
var counter = {
	initialValue: 1,
};

function generateRandomNumber(min, max){
	randomNumber = (Math.round(Math.random()*(max-min)))+min;
	return randomNumber;
}

generateRandomNumber(1, 101);

selectNumber.value = parseInt(selectNumber.value);
function sendNumber() {
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
	counter.currentValue= counter.initialValue ++;
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

function resetGame() {
	form.classList.add('hidden');
	textAlert.innerHTML = 'Escribe un número y dale a <em>Prueba</em>';
	newTry.innerHTML = 0;
}

console.log(randomNumber);


buttonTry.addEventListener('click', sendNumber);
buttonTry.addEventListener('click', startCount);
buttonScore.addEventListener('click', sendInfoScore);
buttonScore.addEventListener('click', resetGame);
