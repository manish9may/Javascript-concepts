var maxProduct = function(nums){
	if(!nums || nums.length == 0){
		return 0;
	}
	var max = [],min = [], result;
	min[0] = max [0] = result = nums[0];
	for(var i = 1; i < nums.length;i++){
		if(nums[i] > 0){
			max[i] = Math.max(nums[i],max[i - 1] * nums[i])
			min[i] = Math.min(nums[i],min[i - 1] * nums[i])
		}else{
			max[i] = Math.max(nums[i],min[i - 1] * nums[i])
			min[i] = Math.min(nums[i],max[i - 1] * nums[i])
		}
		result = Math.max(result,max[i]);
	}

	return result;
}

console.log('maxProduct(['+6, -3, -10, 0, 2+'])          ',maxProduct([6, -3, -10, 0, 2]))