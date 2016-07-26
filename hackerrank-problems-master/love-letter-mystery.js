function processData(input) {
  var num = input.split("\n");
  var n = parseInt(num[0]);
  for (var i = 1; i <= n; i++) {
    var strArr = num[i].split('');
    var l = strArr.length, newCode = 0, count = 0;
    var end = Math.ceil(l/2);
    for (var j = 0; j < end; j++) {
      if (strArr[j] != strArr[l - j - 1]) {
        if (strArr[j] > strArr[l - j -1]) {
          while (strArr[j] > strArr[l - j -1]) {
            newCode = strArr[j].charCodeAt(0) - 1;
            strArr[j] = String.fromCharCode(newCode);
            count++;
          }
        }
        else {
          while (strArr[j] < strArr[l - j -1]) {
            newCode = strArr[l - j -1].charCodeAt(0) - 1;
            strArr[l - j -1] = String.fromCharCode(newCode);
            count++;
          }
        }
      }// end of main if loop
    }
    console.log(count);
    console.log(strArr.join(''));
    count = 0;
  }
}
processData("4\nabc\nabcba\nabcd\ncba")
