//Create prompt to ask user for name
var myName = "Louise";
var yourName = prompt("What is your name?");
alert("My name is " + myName + " your name is " + yourName);


//Exercise 1) To switch from var a to var b :

function test() {
  var a = "3";
  var b = "8";
  var c = a;

  a = b;
  b = c;

  console.log("a is " + a);
  console.log("b is " + b);
}

//Exercise 2) Create tweet box with limited characters

var tweet = prompt("Type your text here:");
var tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140);

//Exercise 3) Get name and change 1st letter to upper case

var name = prompt("What is your name?");
var letter1 = name.slice(0, 1);
var otherLetters = name.slice(1, name.length);
letter1 = letter1.toUpperCase();
otherLetters = otherLetters.toLowerCase();
alert("Hello, " + letter1 + otherLetters);

//Exercise 4) Move Robot around http://stanford.edu/~cpiech/karel/ide.html

function main() {
  changePositionOdd();
  changePositionEven();
  changePositionOdd();
  changePositionEven();
  changePositionOdd();

}

function changePositionOdd() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  turnLeft();
  move();
}

function changePositionEven() {
  turnLeft();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  turnRight();
  move();
  turnRight();

}


//Exercise 5) Calculate time left if we lived until 90

function lifeInWeeks(age) {
  var timeLeft = 90 - age;
  var months = timeLeft * 12;
  var weeks = timeLeft * 52;
  var days = timeLeft * 365;

  console.log("You have " + days + " days, " + weeks + " weeks, or " + months + " months left.");
}

lifeInWeeks(age);

//Exercise 6) Create BMI calculator
// If my weight is 65kg and my height is 1.8m BMI= 20

function bmiCalculator(weight, height) {
  var bmi = Math.floor(weight / (height * height));
  return bmi;
}

var bmi = bmiCalculator(65, 1.8);
console.log("Your BMI is " + bmi);
