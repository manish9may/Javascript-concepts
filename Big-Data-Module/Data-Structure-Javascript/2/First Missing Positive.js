var FirstMissingPositive = function(nums) {
	nums = nums.slice().sort();
    if(nums.length === 0 || nums[nums.length-1] <= 0){ 
    	return 1; 
    }
    for(var i=0,k=1; i<nums.length; ++i){ // C
    	if(nums[i] > k){
    		return k;
    	}
    	k = nums[i] < k ? k : k + 1;    

    }
    return nums[nums.length-1]+1; // D
}
console.log('FirstMissingPositive('+[3,4,-1,1]+')       ',FirstMissingPositive([3,4,-1,1]))