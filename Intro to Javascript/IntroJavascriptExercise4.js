////Exercises from Intro to Javascript

//Exercise 4) Move Robot around http://stanford.edu/~cpiech/karel/ide.html

function main() {
  changePositionOdd();
  changePositionEven();
  changePositionOdd();
  changePositionEven();
  changePositionOdd();

}

function changePositionOdd() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  turnLeft();
  move();
}

function changePositionEven() {
  turnLeft();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  turnRight();
  move();
  turnRight();

}
