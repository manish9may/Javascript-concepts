var findMin = function(nums) {
	if(!nums || nums.length === 0){
		return null
	}
	var result = nums[0]
	for(var i = 1;i< nums.length - 1;i++){
		if(nums[i] > nums[i+1]){
			return nums[i+1]
		}
	}
	return result;
}

console.log('findMin(['+4,5,6,7,0,1,2+'])          '+findMin([4,5,6,7,0,1,2]))