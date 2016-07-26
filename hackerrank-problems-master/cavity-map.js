function processData(input) {
  var a = input.split("\n");
  var n = parseInt(a[0]);
  var row = [];
  for (var i = 1; i <= n; i++) {
    row[i - 1] = a[i].split("");
  }
  var map = [];
  for (var j = 0; j < n; j++) {
    map[j] = row[j];
  }
  for (var k = 1; k < n - 1; k++) {
    for (var l = 1; l < n - 1; l++) {
      var current = parseInt(map[k][l]);
      var top = parseInt(map[k - 1][l]);
      var ri = parseInt(map[k][l + 1]);
      var bot = parseInt(map[k + 1][l]);
      var left = parseInt(map[k][l - 1]);
      if (top < current && ri < current && bot < current && left < current) {
        map[k][l] = "X";
      }
    }
  }
  for (var p = 0; p < n; p++) {
    var output = "";
    for (var q = 0; q < n; q++ ) {
      output += map[p][q];
    }
    console.log(output);
  }
}
processData("4\n1112\n1912\n1892\n1234");
