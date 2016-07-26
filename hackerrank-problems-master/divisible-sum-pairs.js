function findPairs(a, n, k) {
  var c = 0;
  for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n; j++) {
      if ((a[i] + a[j]) % k == 0) {
        c++;
      }
    }
  }
  console.log(c);
}
findPairs([1,3,2,6,1,2], 6, 3);
