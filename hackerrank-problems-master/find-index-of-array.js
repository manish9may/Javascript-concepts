function processData(input) {
  var num = input.split("\n");
  var V = parseInt(num[0]);
  var n = parseInt(num[1]);
  var arr = num[2].split(" ");
  for (var i = 0; i < n; i++) {
    if (arr[i] == V) {
      console.log(i);
      break;
    }
  }
}
processData("4\n6\n1 4 5 7 9 12");
