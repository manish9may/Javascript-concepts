function processData(input) {
  var num = input.split("\n");
  var n = num[0];
  var arr = num[1].split(" ");
  var output = "";
  for (var i = n - 1; i >= 0; i--) {
    output += arr[i] + " ";
  }
  console.log(output);
}
processData("4\n1 4 3 2");
