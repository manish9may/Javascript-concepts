function processData(input) {
  var num = input.split("\n");
  var T = parseInt(num[0]);
  var c = 1, arr = [], a = 0, b = 0, n = 0;
  for (var i = 1; i <= T; i++) {
    n = parseInt(num[c]);
    a = parseInt(num[c + 1]);
    b = parseInt(num[c + 2]);
    c+=3;
    if ( a != b) {
      arr[0] = a * (n - 1);
      arr[1] = b * (n - 1);
      var out = 2;
      if (n % 2 != 0) {
        arr[out] = a * (n - 1)/2 + b * (n - 1)/2;
        out++;
      }
      if (n > 3) {
        var e = Math.floor(n/2 - 1);
        for (var j = 1; j <= e; j++) {
          arr[out] = a * (n - j - 1) + b * j;
          out++;
          arr[out] = b * (n - j - 1) + a * j;
          out++;
        }
      }
      arr.sort(function(a, b) {return a - b});
      var output = "";
      for (var k = 0; k < arr.length; k++) {
      output += arr[k] + " ";
      }
    }
    else {
      output = a * (n- 1);
    }
    console.log(output);
    arr = [];
  }
}
//processData("2\n3\n1\n2\n4\n10\n100");
processData("5\n58\n69\n24\n83\n86\n81\n73\n25\n25\n12\n73\n82\n5\n3\n23");
