function diagDiff(n, a) {
  var pdSum = 0, sdSum = 0;
  for (var i = 0; i < n; i++) {
    pdSum += a[i][i];
    sdSum += a[i][n - i - 1];
  }
  var total = Math.abs(pdSum - sdSum);
  console.log(total);
}
diagDiff(3, [[11, 2, 4],[4, 5, 6],[10, 8, -12]]);
