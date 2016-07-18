var missingNumber = function(nums){
	nums = nums.sort();
	var sum = 0;
	for(var index = 0;index<nums.length;index++){
		sum += nums[index];
	}
	return ((nums.length+1)*nums.length)/2 - sum;
}


console.log('missingNumber('+[0,1,2,4,5,6]+')          '+missingNumber([0,1,2,4,5,6]))