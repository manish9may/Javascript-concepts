var minSubArrayLen = function(s, nums) {
    if(!nums || nums.length === 0){
    	return 0;
    }
    var result = nums.length,runningSum = 0, start = 0, end = 0;
    while(start < nums.length){
    	if(runningSum < s && end < nums.length){
    		runningSum += nums[end];
    		end++;
    	}else if(runningSum >= s){
    		result = Math.min(result,end - start);
    		runningSum -= nums[start];
    		start++;
    	}else{
    		break;
    	}
    }
    return result;
};

console.log('minSubArrayLen(7,['+2,3,1,2,4,3+'])              '+minSubArrayLen(7, [2,3,1,2,4,3]))