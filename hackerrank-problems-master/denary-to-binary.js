function processData(input) {
  var num = input.split("\n");
  var t = parseInt(num[0]);
  for (var i = 1; i <= t; i++) {
    var n = parseInt(num[i]);
    var output = n.toString(2);// might be an interesting problem to do this without the toString function
    console.log(output);
  }
}
processData("2\n4\n5");
