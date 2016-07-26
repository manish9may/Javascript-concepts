function tree(n) {
  var h = 1;
  if (n == 0) {
    return h;
  }
  for (var i = 1; i <= n/2; i++) {
    h = h*2 + 1;
  }
  return h;
}
function processData(input) {
  var a = input.split("\n");//takes account of way data is input on hackerrank
  var end = parseInt(a[0]);
  for (var i = 1; i <= end; i++) {
    var n = parseInt(a[i]);
    if (n % 2 == 1) {
      n -= 1;
      var height = tree(n) * 2;
    } else {
      var height = tree(n);
    }
    console.log(height);
  }
}
processData("3\n0\n1\n4");
