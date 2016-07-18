var maxSubArray = function(nums){
	if(!nums || nums.length == 0){
		return 0;
	}
	var sum,maxSum;
	sum = maxSum = nums[0];
	for(var i = 1;i<nums.length;i++){
		if(sum > 0){
			sum += nums[i]
		}else{
			sum = nums[i]
		}
		maxSum = Math.max(maxSum,sum);
	}

	return maxSum;
}

console.log('maxSubArray([−2,1,−3,4,−1,2,1,−5,4])            ',maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));