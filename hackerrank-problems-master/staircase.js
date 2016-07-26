function staircase(n) { // n is the height of the staircase
  for (var i = 1; i <= n; i++) {
    var output = "";
    for (var j = 1; j <= n - i; j++) {
      output += " ";
    }
    for (var k = 1; k <= i; k++) {
      output += "#";
    }
    console.log(output);
  }

}
staircase(6);
