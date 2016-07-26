function processData(input) {
  var a = input.split("\n");//takes account of way data is input on hackerrank
    var end = parseInt(a[0]);
    for (var i = 1; i <= end; i++) {
      var n = parseInt(a[i]);
      console.log(n + 1);
    }
}
processData("2\n1\n2");
