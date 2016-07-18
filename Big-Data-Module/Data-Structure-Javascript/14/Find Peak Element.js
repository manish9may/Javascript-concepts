var findPeakElement = function(nums) {
    if(!nums && nums.length === 0){
    	return null;
    }
    if(nums.length === 1){
    	return 0;
    }
    if(nums.length === 2){
    	return nums[0] > nums[1] ? 0 : 1;
    }
    var i = 1
    for(;i < nums.length - 1;i++){
    	if(nums[i] > Math.max(nums[i+1],nums[i-1])){
    		return i;
    	}
    }
    return nums[0] > nums[i] ? 0 : i;
};

console.log('findPeakElement(['+1, 2, 3, 1+'])           ',findPeakElement([1, 2, 3, 1]))