function fibonacciSequence() {
  var a = 0;
  var b = 1;

  var result = b;

  for (var i = 1; i < 10; i++) {
    // console.log(result);
    result = a + b;
    a = b;
    b = result;
  }
}
fibonacciSequence();
