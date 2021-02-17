//Exercises from Intermediate Javascript


// Recreate the 99 Beers song using While Loops

function beerSong() {
  var numberOfBottles = 99;

  while (numberOfBottles > 1) {
    var bottlesMinusOne = (numberOfBottles - 1);

    console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer. Take one down and pass it around, " + bottlesMinusOne + " bottles of beer on the wall.");

    numberOfBottles--;
  }
  if (numberOfBottles = 1) {
    console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer. Take one down and pass it around, no more bottles of beer on the wall.")
  }

  console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall");

}
