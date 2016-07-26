function processData(input) {
  var num = input.split("\n");
  var NandK = num[0].split(" ");
  var n = parseInt(NandK[0]);
  var k = parseInt(NandK[1]);
  var prices = num[1].split(" ");
  prices.sort(function(a, b) {return a - b});
  var count = 0, sum = 0;
  for (var i = 0; i < prices.length; i++) {
    sum += parseInt(prices[i]);
    count++;
    if (sum > k) {
      count--;
      break;
    }
  }
  console.log(count);
}
processData("7 50\n1 12 5 111 200 1000 10");
