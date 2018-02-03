// index.js: The file containing the logic for the course of the game, 
//which depends on Word.js and:
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require('inquirer');
var isLetter = require('is-letter');
var prompt = require('prompt');
var Word = require('./word.js');
var WordArr = require("./game.js")
var guessesRemaining = 9;

var wordToGuess = new isLetter(WordArr.words);

startGame: function(){
	this.guessesRemaining = 9,
	this.currentWord = new Word(this.wordToGuess[Math.floor(Math.random() * this.wordToGuess.length)]),
	this.currentWord.char(),
	this.reveal = reveal,
	inquirer.prompt({
		name: "input",
		message: "Guess a letter!"
	}).then(function(answer){
		input.push(answer.input);
	})

}

// getLetter(getlet);