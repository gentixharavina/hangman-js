//Create an array of words
var underScores = [];
var randomWord = "";
var wrongLetter = [];
var userGuesses = [];
var guessesLeft = 9;
var correctGuess = [];
//Choose the words randomly
//Create input field for words
//Get the users guess
//Check if its right
const songs = ['Baresha', 'Fellenza', 'La Reina', 'ROFE', 'Kurgjo nuk Kallxojna', 'Deja Vu', 'Papuqe Gucci']
const words = ['prizren', 'imbus', 'liverpool', 'miami', 'budapest', 'peja', 'prishtina', 'ketamina'];
const canvas = document.getElementById('hangman');
const context = canvas.getContext('2d');

// alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function startGame() {
    draw();
    randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
    for (var i = 0; i < randomWord.length; i++) {
      underScores.push('_');
    }
    document.getElementById("answer").innerHTML = underScores.join(" ");


//ALPHABET
    for (var i = 0; i < alphabet.length; i++) {
        var list = document.createElement('button');
        list.innerHTML = alphabet[i].toUpperCase();
        list.setAttribute('value', alphabet[i]);
        list.id = alphabet[i];
        list.setAttribute('class', 'btn letters');
        let letter = list.getAttribute('value');
        list.addEventListener('click', (event) => {
          updateLetter(letter);
          document.getElementById(event.target.id).setAttribute('class','btn letters-hidden letters');
        });
        document.getElementById('alphabet').appendChild(list);
      };
      
    //reset
    guessesLeft = 9;
    

}


var updateLetter = (letter) => {
  if (randomWord.indexOf(letter) > -1) {
    for (var k = 0; k < randomWord.length; k++) {
      if (randomWord[k] === letter) {
        underScores[k] = letter;
        console.log(underScores);
        document.getElementById('answer').innerHTML = underScores.join(" ");
        if (!underScores.includes('_')) {
          win();
        }
      }
    }
  } else if (randomWord[k] !== letter) {
    wrongLetter.push(letter);
    if (wrongLetter.length == 1) {
      head();
    } else if (wrongLetter.length == 2) {
      body();
    } else if (wrongLetter.length == 3) {
      leftArm();
    } else if (wrongLetter.length == 4) {
      rightArm();
    } else if (wrongLetter.length == 5) {
      leftLeg();
    } else if (wrongLetter.length == 6) {
      rightLeg();
    } else if (wrongLetter.length == 7) {
      sadMouth();
    } else if (wrongLetter.length == 8) {
      sadBoi();
    } else if (wrongLetter.length == 9) {
      sadBoiDy();
      youLose();
      list.setAttribute('id', 'letters-hidden')
    }
    guessesLeft--;
    console.log(guessesLeft);
    console.log(wrongLetter);
  }
}

  

function win() {
    document.getElementById('result').innerHTML = " YOU WIN ! ";
}

function draw() {
  context.beginPath();
    context.lineWidth = 20;
    context.strokeStyle = 'black';
    context.moveTo(70,50);
    context.lineTo(70,500);
    context.stroke();
  context.beginPath(); //horizontal bar
      context.moveTo(40,50);
      context.lineTo(200,50);
      context.stroke();
  context.beginPath(); //ground
      context.moveTo(0,300);
      context.lineTo(400,300);
      context.stroke();
  context.lineWidth = 4;
  context.beginPath(); //noose
      context.moveTo(150,40);
      context.lineTo(150,80);
      context.stroke();
}

function head() {
  context.lineWidth = 2;
  context.beginPath(); //head
      context.arc(150, 100, 20, 0, 2*Math.PI);
      context.stroke();
  context.beginPath(); //left eye
      context.arc(143, 95, 3.5, 0, 2*Math.PI);
      context.stroke();
  context.beginPath(); //right eye
      context.arc(157, 95, 3.5, 0, 2*Math.PI);
      context.stroke();
}

function body() {
  context.beginPath(); //body
      context.moveTo(150,120);
      context.lineTo(150,190);
      context.stroke();
}

function leftArm() {
  context.beginPath(); //left arm
      context.moveTo(150,135);
      context.lineTo(120,160);
      context.stroke();
}

function rightArm() {
  context.beginPath(); //right arm
      context.moveTo(150,135);
      context.lineTo(180,160);
      context.stroke();
}

function rightLeg() {
  context.beginPath(); //right leg
      context.moveTo(149,188);
      context.lineTo(180,230);
      context.stroke();
}

function leftLeg() {
  context.beginPath(); //left leg
      context.moveTo(151,188);
      context.lineTo(120,230);
      context.stroke();
}

function sadMouth() {
  context.beginPath(); //sad mouth
      context.arc(150, 112, 9, 0, Math.PI, true);
      context.stroke();
}

function sadBoi() {
context.clearRect(138, 90, 10, 10);
  context.beginPath();
  context.moveTo(138, 100);
  context.lineTo(150, 90);
  context.moveTo(150, 100);
  context.lineTo(138, 90);
  context.stroke();
}

function sadBoiDy() {
context.clearRect(152, 90, 10, 10);
  context.beginPath();
  context.moveTo(152, 90);
  context.lineTo(162, 100);
  context.moveTo(162, 90);
  context.lineTo(150, 100);
  context.stroke();
}

function youLose() {
  context.beginPath();
    context.moveTo(260, 90);
    context.lineTo(270, 100);
    context.lineTo(280 ,90)
    context.moveTo(270, 100);
    context.lineTo(270, 115);
    context.stroke();

  context.beginPath();
    context.arc(270, 140, 12, 0, 2*Math.PI);
    context.stroke();

  context.beginPath();
    context.moveTo(260, 170);
    context.lineTo(260, 195);
    context.lineTo(280, 195);
    context.lineTo(280, 170);
    context.stroke();

    context.beginPath();
      context.moveTo(320, 50);
      context.lineTo(320, 75);
      context.lineTo(340, 75);
      context.stroke();

    context.beginPath();
      context.arc(330, 100, 12, 0, 2*Math.PI);
      context.stroke();

    context.beginPath();
      context.arc(330, 140, 12, 0, 2*Math.PI);
      context.stroke();

    context.beginPath();
      context.moveTo(340, 170);
      context.lineTo(320, 170);
      context.lineTo(320, 185);
      context.lineTo(340, 185);
      context.lineTo(340, 200);
      context.lineTo(320, 200);
      context.stroke();

      context.beginPath();
        context.moveTo(340, 220);
        context.lineTo(320, 220);
        context.lineTo(320, 250);
        context.lineTo(340, 250);
        context.stroke();
      context.beginPath();
        context.moveTo(320, 235);
        context.lineTo(335, 235);
        context.stroke();
}

/*
*/
// questions


startGame();
