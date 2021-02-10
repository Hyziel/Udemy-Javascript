////Exercises from Intro to Javascript

//Exercise 3) Get name and change 1st letter to upper case

var name = prompt("What is your name?");
var letter1 = name.slice(0, 1);
var otherLetters = name.slice(1, name.length);
letter1 = letter1.toUpperCase();
otherLetters = otherLetters.toLowerCase();
alert("Hello, " + letter1 + otherLetters);
