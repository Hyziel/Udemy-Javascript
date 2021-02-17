//Exercises from Intermediate Javascript

//Coding Challenge : The Fibonacci Exercise


function fibonacciGenerator (n) {
    var fibonacciList = [0];
    var index = 0;

if (n >= 2){
    fibonacciList.push(1);
}


while (fibonacciList.length < n){

    var sum = (fibonacciList[index] + fibonacciList[index + 1]);
    fibonacciList.push(sum);

   index += 1;
  }

  return fibonacciList;

}
    //Return an array of fibonacci numbers starting from 0.

fibonacciGenerator(33);
