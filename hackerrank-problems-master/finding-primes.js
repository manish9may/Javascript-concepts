function processData(input) {
  var a = input.split("\n");
  var n = parseInt(a[0]);
  for (var i = 1; i <= n; i++) {
    if (primeCheck(a[i]) == true) {
      console.log("Prime");
    }
    else {
      console.log("Not prime");
    }
  }
}
function primeCheck(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    var limit = Math.floor(Math.sqrt(num));
    for (var f = 2; f <= limit; f++) {
        if (num%f === 0) {
            return false;
        }
    }
    return true;
}
processData("3\n12\n5\n7");
