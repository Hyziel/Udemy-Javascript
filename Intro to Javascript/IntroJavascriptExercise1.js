////Exercises from Intro to Javascript

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
