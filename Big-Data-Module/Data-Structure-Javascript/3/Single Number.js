var singleNumber = function(nums) {
	nums = nums.sort();
	for(var index = 0;index<nums.length - 1;index=index+2){
		if(nums[index+1] !== nums[index]){
			return nums[index];
		}
	}
	return nums[nums.length - 1]
}

console.log('singleNumber('+[5,5,9,9,2,2,4,7,7,5]+')         '+singleNumber([5,5,9,9,2,2,4,7,7,5]))