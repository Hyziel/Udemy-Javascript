//Exercises from Intermediate Javascript

// Who's buying lunch ? Code challenge

function whosPaying(names){
    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var hostIndex = Math.random() * names.length; //select random number out of array
    hostIndex = Math.floor(hostIndex);

   return (names[hostIndex] + " is going to buy lunch today !");

}
