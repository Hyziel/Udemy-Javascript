//Exercises from Intermediate Javascript

//Use arrays to check if your a person is on your guestlist

function welcomeGuest(yourName){
 var guestList = ["Pierre", "Paul", "Jules", "Marie", "Lola", "Sophie"];

 if (guestList.includes(yourName)){
     alert("Welcome " + yourName + " !");
 }
 else {
     alert("Sorry, you were not invited.");
 }
}

var yourName = prompt("What is your name ?");
var welcomeGuest = welcomeGuest(yourName);
