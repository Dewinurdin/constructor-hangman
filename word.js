// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
//This is used to create an object representing the current word the user is 
//attempting to guess.

// Word.js should only require Letter.js
var letter = require("./letter.js");

function Word(word){
	this.word = word;
	this.letters = [];
	this.found = false;
	this.getLetters = function(){
		for (var i = 0; i < this.word.length; i++){
			this.letters.push(new letter(this.word[i]));
		}
	};
	this.findWord = function(){
		this.found = this.letters.every(function(currentLetter){
			return currentLetter.appear;
		})
		return this.found;
	};
	this.checkLetter = function(guessLetter){
		if (this.letters[i].character == guessLetter){
			this.letters[i].appear = true;
			toReturn++;
		}
	}
	return toReturn;

this.wordRender = function(){
	var string = "";
	for (var i = 0; i < this.letters.length; i++){
		string += this.letters[i]
	}
	return string;
	};
}

module.exports = Word;





