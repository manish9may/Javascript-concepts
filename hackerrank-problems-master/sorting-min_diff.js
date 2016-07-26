function processData(input) {
  var a = input.split("\n");
  var n = parseInt(a[0]);
  var nums = a[1].split(" ");
  nums = nums.map(Number);
  nums.sort(function(a, b){return a - b});
  var temp = 10000001, output = "";
  for (var i = 0; i < n - 1; i++) {
    if (Math.abs(nums[i] - nums[i + 1]) <= temp) {
      if (Math.abs(nums[i] - nums[i + 1]) < temp) {
        temp = Math.abs(nums[i] - nums[i + 1]);
        output = nums[i] + " " + nums[i + 1];
      }
      else {
        output += " " + nums[i] + " " + nums[i + 1];
      }
    }
  }
  console.log(output);
}
processData("12\n-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854 -520 -470");


// First try using two loops - not so good with very large sets of data
// (having sorted no need to use two loops!)
 var st = 0
for (var i = 0; i < n; i++) {
  st++;
  for (var j = st; j < n; j++) {
    if (Math.abs(nums[i] - nums[j]) <= temp) {
      if (Math.abs(nums[i] - nums[j]) < temp) {
        temp = Math.abs(nums[i] - nums[j]);
        output = nums[i] + " " + nums[j];
      }
      else {
        output += " " + nums[i] + " " + nums[j];
      }
    }
  }
}
