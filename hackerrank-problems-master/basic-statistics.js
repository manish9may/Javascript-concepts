function processData(input) {
  var numSet = input.split("\n");
  var num = numSet[0], sum = 0, mean = 0, stSum = 0, median = 0, mode = 0;
  var numArr = numSet[1].split(" ");
  var len = numArr.length;
  // Finding mean
  for (var i = 0; i < len; i++) {
    numArr[i] = parseInt(numArr[i]);
    sum += numArr[i];
  }
  mean = sum/num;
  // Finding standard deviation
  for (var j = 0; j < len; j++) {
    stSum += Math.pow((numArr[j] - mean), 2);
  }
  stSum = stSum/num;
  sDev = Math.sqrt(stSum);
  mean = Math.round(mean * 10)/10;
  sDev = Math.round(sDev * 10)/10;
  // Finding median
  numArr.sort(function(a, b){return a - b});
  if (len % 2 == 0) {
    median = (numArr[len/2 - 1] + numArr[len/2])/2;
  }
  else {
    median = numArr[(len - 1)/2];
  }
  // Finding mode
  var k = 0, tot = 0, fTot = 0, stay = true, temp = 0;
  while (k < len) {
    stay = true;
    tot = 1;
    temp = numArr[0];
    numArr.shift();
   while (stay == true) {
    if (numArr.includes(temp) == true) {// for older browsers :- if (numArr.indexOf(temp) != -1)
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
  console.log(mean);
  console.log(median);
  console.log(mode);
  console.log(sDev);
}
// processData("10\n64630 11735 14216 99233 14470 4978 73429 38120 51135 67060");
//processData("9\n1290 1291 129 139 129 129 129 1292 1290")
processData("38\n9 1 2 3 4 56 57 87 89 90 123 11 22 44 890 3 7 9 19 190 991 800 345 456 789 987 675 3467 87 89 990 990 3564 34 990 1243 45 990")
