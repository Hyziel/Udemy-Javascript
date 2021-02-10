////Exercises from Intro to Javascript

//Exercise 5) Calculate time left if we lived until 90

function lifeInWeeks(age) {
  var timeLeft = 90 - age;
  var months = timeLeft * 12;
  var weeks = timeLeft * 52;
  var days = timeLeft * 365;

  console.log("You have " + days + " days, " + weeks + " weeks, or " + months + " months left.");
}

lifeInWeeks(age);
