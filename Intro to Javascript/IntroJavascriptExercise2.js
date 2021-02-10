////Exercises from Intro to Javascript

//Exercise 2) Create tweet box with limited characters

var tweet = prompt("Type your text here:");
var tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140);
