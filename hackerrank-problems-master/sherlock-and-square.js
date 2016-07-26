function processData(input) {
  var a = input.split("\n");//takes account of way data is input on hackerrank
  var end = parseInt(a[0]);
  for (var i = 1; i <= end; i++) {
      var nums = a[i].split(" ");
      // following method is much, much better than checking each digit for a perfect square!!
      var s1 = Math.sqrt(parseInt(nums[0]));
      var s2 = Math.sqrt(parseInt(nums[1]));
      var count = Math.floor(s2) - Math.floor(s1);
      if (s1 % 1 === 0) {
        count++;
      }
      console.log(count);
  }
}
processData("3\n3 9\n17 24\n16 25");
