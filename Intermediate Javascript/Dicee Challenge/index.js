//Dicee challenge - Create a dice generator and use querySelectors

// Create array to store images
var pictures = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// Generate random number for dice 1
var randomNumber1 = Math.floor(Math.random() * pictures.length);
// Change image 1 according to number
document.querySelector(".img1").setAttribute("src", pictures[randomNumber1]);

// Generate random number for dice 2
var randomNumber2 = Math.floor(Math.random() * pictures.length);
// Change image 2 according to number
document.querySelector(".img2").setAttribute("src", pictures[randomNumber2]);

// Change title depending on result
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "DRAW !";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Wins !";
}
else { document.querySelector("h1").textContent = "Player 1 Wins !";
}
