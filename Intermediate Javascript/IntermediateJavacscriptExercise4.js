//Exercises from Intermediate Javascript

// FizzBuzz Challenge
// want to print from 1 to 100, if multiple of 3 print Fizz, if multiple of 5 print Buzz,
// if multiple of both print FizzBuzz

var output = []; // Create empty array
var count = 1; //Define first value for array to push from

function fizzBuzz() {

if ((count % 3 === 0) && (count % 5 === 0)){
        output.push("FizzBuzz");
}
else if (count % 3 === 0){ //check that it doesnt interfere with rest of options
    output.push("Fizz"); //change pushing to something different
}
else if (count % 5 === 0){
    output.push("Buzz");
}

else {
    output.push(count); //keep pushing normal numbers
}

count++; // adds 1 to value defined

console.log(output); //show array in console
}
