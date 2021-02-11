//Exercises from Intermediate Javascript

// Leap Year coding challenge
// Using ifElse and comparators to create a leap year checker

function isLeap(year){
    if (year % 4 !== 0){
        return "Not leap year.";
    }

    if (year % 100 !== 0){
       return "Leap year."
    }

    if (year % 400 === 0){
       return "Leap year."
       }
    return "Not leap year."

}

var isLeap = isLeap(2001);
console.log(isLeap);
