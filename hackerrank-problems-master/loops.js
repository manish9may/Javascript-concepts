function processData(input) {
  var num = input.split("\n");//takes account of way data is input on hackerrank
  var end = parseInt(num[0]);
  for (var i = 1; i <= end; i++) {
    var outStr = "";
    var line = num[i].split(" ");
    var n = parseInt(line[2]);
    var a = parseInt(line[0]);
    var b = parseInt(line[1]);
    var output = 0;
    for (var j = 0; j < n; j++) {
     output = a;
     for (var k = 0; k < j + 1; k++) {
       output += Math.pow(2, k) * b;
     }
     outStr += output.toString() + " ";
    }
    outStr = outStr.substring(0, outStr.length - 1);
    console.log(outStr);
  }
}
processData("2\n5 3 5\n0 2 10");
