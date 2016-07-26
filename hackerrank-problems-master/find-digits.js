function processData(input) {
  var a = input.split("\n");//takes account of way data is input on hackerrank
  var t = parseInt(a[0]), sum = 0;
  for (var i = 1; i <= t; i++) {
    var d = a[i].split("");
    var d2 = parseInt(a[i]);
    for (var j = 0; j < d.length; j++) {
      var div = parseInt(d[j]);
      if (d2 % div == 0)  {
        sum++;
      }
    }
    console.log(sum);
    sum = 0;
  }
}
processData("2\n12\n1012");
