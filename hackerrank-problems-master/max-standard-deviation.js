var numArr = [1, 2, 3];
var mean = 2, maxMean = 0;
var sDev = 0.816497, maxSDev = 0;
for (i = 2.5; i < 3.5; i += 0.001) {
  maxMean = (1 + 2 + 3 + i)/4;
  var f = Math.pow((maxMean - 1), 2), s = Math.pow((maxMean - 2), 2);
  var t = Math.pow((maxMean - 3), 2), l = Math.pow((maxMean - i), 2);
  maxSDev = Math.sqrt((f + s + t + l)/4);
  if (maxSDev > sDev) {
    var ans = i - 0.001;
    break;
  }
}
console.log(ans)
