function processData(input) {
  var a = input.split("\n");
  var num = a[0];
  var Calculator = function() {

  };
  Calculator.prototype.power = function(n, p) {
    try {
      if (n  < 0 || p < 0) {
        throw "n and p should be non-negative"
      }
      var output = Math.pow(n, p);
      console.log(output);
    }
    catch(err) {
      console.log(err);
    }

  };
  //for (var i = 1; i <= num; i++) {
  var i = 0;
  while(num-->0) {// first time I have come across this way of using a while loop
    i++;
    var ints = a[i].split(" ");
    var c = new Calculator();
    var n = parseInt(ints[0]);
    var p = parseInt(ints[1]);
    c.power(n, p);
  }

}
processData("4\n3 5\n2 4\n-1 -2\n-1 3");

// alternative way
var Calculator = function() {
};

Calculator.prototype.power = function(n, p) {
  if (n  < 0 || p < 0) {
      throw "n and p should be non-negative"
    }
    var output = Math.pow(n, p);
    return output;
}
function processData(input) {
  var a = input.split("\n");
  var num = a[0];
  var c = new Calculator();
  var i = 0;
  while(num-->0) {
    i++;
    var ints = a[i].split(" ");
    try {
    var n = parseInt(ints[0]);
    var p = parseInt(ints[1]);
    var ans = c.power(n, p);
    console.log(ans);
    }
    catch(e) {
    console.log(e);
    }
  }
}
processData("4\n3 5\n2 4\n-1 -2\n-1 3");
