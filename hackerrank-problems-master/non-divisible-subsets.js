function processData(input) {
  var initArr = input.split("\n");
  var nums = initArr[0].split(" ");
  var n = nums[0], k = nums[1], c = 0, maxSize = 0;
  var wSet = initArr[1].split(" ");
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i != j) {
        if ((wSet[i] + wSet[j]) % k == 0) {

        }
      }
    }
    console.log(c);

    if (c > maxSize) {
      maxSize = c;
    }
    c = 0;
  }
  maxSize++;
  console.log(maxSize);
}
processData("4 3\n1 7 2 4");
