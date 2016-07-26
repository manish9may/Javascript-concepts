// formula = (L * sqrt of 2 - sqrt of q * sqrt of 2) / |s1 - s2|
function processData(input) {
var a = input.split("\n");//takes account of way data is input on hackerrank
var initStr = a[0];
var end = parseInt(a[1]);
var init = initStr.split(" ");
var size = parseInt(init[0]);

var v1 = parseInt(init[1]), v2 = parseInt(init[2]);
  for(var i = 1; i <= end; i++ ) {
    var q = parseInt(a[i + 1]);
    var time = ((size - Math.sqrt(q)) * Math.sqrt(2))/ Math.abs(v1 - v2);
    console.log(time);
  }

}
processData("10 1 2\n2\n50\n100")
