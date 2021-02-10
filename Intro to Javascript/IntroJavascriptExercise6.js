////Exercises from Intro to Javascript

//Exercise 6) Create BMI calculator
// If my weight is 65kg and my height is 1.8m BMI= 20

function bmiCalculator(weight, height) {
  var bmi = Math.floor(weight / (height * height));
  return bmi;
}

var bmi = bmiCalculator(65, 1.8);
console.log("Your BMI is " + bmi);
