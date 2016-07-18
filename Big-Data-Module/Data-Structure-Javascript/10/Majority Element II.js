var majorityElement = function(nums) {
	if(!nums || nums.length === 0){
		return nums;
	}
	var hasNums = {};
	var result = [];
	for(var i = 0;i<nums.length;i++){
		if(result.indexOf(nums[i]) !== -1){
			continue;
		}
		if(!hasNums[nums[i]]){
			hasNums[nums[i]] = 1;
		}else{
			hasNums[nums[i]] += 1;
		}
		if(hasNums[nums[i]] > Math.floor(nums.length/3)){
			result.push(nums[i])
		}
	}

	return result;
}

console.log('majorityElement(['+1,2,3,3,3,3,5,6+'])           ',majorityElement([1,2,3,3,3,3,5,6]))