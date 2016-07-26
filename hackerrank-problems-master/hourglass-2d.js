function processData(input) {
  var num = input.split("\n");
  var arr = [];
  for (var r = 0; r < 6; r++) {
    arr[r] = num[r].split(" ");
    arr[r] = arr[r].map(Number);
  }
  function hsum(r, c) {
    var st = r, sum = 0;
    for (var i = c; i < c + 3; i++) {
      sum += arr[st][i];
    }
    sum += arr[r + 1][c + 1];
    st = r + 2;
    for (var j = c; j < c + 3; j++) {
      sum += arr[st][j];
    }
    return sum;
  }
  var tot = -63;//needed because max. sum might be negative
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (hsum(i, j) > tot) {
        tot = hsum(i, j);
      }
    }
  }
console.log(tot);
}
processData("1 1 1 0 0 0\n0 1 0 0 0 0\n1 1 1 0 0 0\n0 0 2 4 4 0\n0 0 0 2 0 0\n0 0 1 2 4 0");
