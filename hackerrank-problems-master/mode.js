function processData(input) {
  var numSet = input.split("\n");
  var numArr = numSet[1].split(" ");
  var len = numArr.length;
  var sum = 0;
  for (var i = 0; i < len; i++) {
    numArr[i] = parseInt(numArr[i]);
    sum += numArr[i];
  }
var k = 0, tot = 0, fTot = 0;
while (k < len) {
  var stay = true;
  tot = 1;
  var temp = numArr[0];
  numArr.shift();
    while (stay == true) {
    if (numArr.includes(temp) == true) {
        tot++;
        numArr.shift();
        k++;
      }
      else {
        k++;
        if (tot > fTot) {
          fTot = tot;
          mode = temp;
        }
        stay = false;
      }
    }
  }
  console.log(mode);
}
processData("8\n3 5 6 5 7 5 9 7");
