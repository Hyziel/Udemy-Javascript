//Exercises from Intermediate Javascript

//Exercise 1) Create a love calculator
var name1 = prompt("what is the name of the first person ?")
var name2 = prompt("What is the name of the second person ?")
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore > 70) {
  console.log("Congrats you're crazy in love! The love score for " + name1 + " and " + name2 + " is " + loveScore + "%");
}
if (loveScore > 40 && loveScore <= 70) {
  console.log("It could be the beginning of something! The love score for " + name1 + " and " + name2 + " is " + loveScore + "%");
}

if (loveScore <= 40) {
  console.log("Run for your life ! The love score for " + name1 + " and " + name2 + " is " + loveScore + "%");

}
