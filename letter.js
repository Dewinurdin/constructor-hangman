
var Letter = function(char){
        this.visible = /[a-z1-9]/i.test(char);
        this.char = char;
        this.appear = false;
        this.renderLetters = function(){
            return this.letter = "_";
        }     
  };

var example = new Letter("x");
console.log(example.visible, "visible");
console.log(example.char, "char");
console.log(example.appear, "appear");
console.log(example.renderLetters, "render");

module.exports = Letter;



// Letter.js should not require any other files.

// HINT: Write Letter.js first and test it on its own before moving on, 
//then do the same thing with Word.js
