function processData(input) {
  var inputArr = input.split("\n");
  var num = inputArr[0], numArr = [];
  var digit = 0;
  for (var k = 1; k <= num; k++) {
    digit = inputArr[k].split(" ")[0];
    numArr.push(digit);
  }
  var c = 0, countArray = [];
  for (var i = 0; i < 100; i++) {
    for (var j = 0; j < num; j++) {
      if (numArr[j] <= i) {
        c++;
      }
    }
    countArray.push(c);
    c = 0;
  }

  var countString = countArray.join(" ");
  console.log(countString);
}
processData("10\n4 that\n3 be\n0 to\n1 be\n5 question\n1 or\n2 not\n4 is\n2 to\n4 the\n");
