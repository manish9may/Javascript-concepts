function processData(input) {
  var num = input.split("\n");
  var n = num[0];
  var numArr = num[1].split(" ");
  numArr.sort(function(a, b){return a - b});
  console.log(n);
  while (n > 1) {
    if (numArr[0] === numArr[1]) {
        n--;
        numArr.shift();
    }
    else {
      n--;
      numArr.shift();
      console.log(n);
    }
  }
}
processData("6\n5 4 4 2 2 8");
