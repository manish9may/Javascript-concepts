var containsDuplicate = function(nums) {
	if(!nums || nums.length < 2){
		return false;
	}
	nums = nums.slice().sort();
	for(var i = 0;i<nums.length - 1;i++){
		if(nums[i+1] === nums[i]){
			return true;
		}
	}    
	return false;
};

console.log('containsDuplicate(['+5,7,8,4,24,14,9+'])            ',containsDuplicate([5,7,8,4,14,24,9]))