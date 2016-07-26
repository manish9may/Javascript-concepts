function sumArray(n, arr) {// obviously n is not relevant when using the reduce method
  var result = arr.reduce(function(val1, val2) {
    return val1 + val2;
  }, 0);
  console.log(result);
}
sumArray(6, [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
