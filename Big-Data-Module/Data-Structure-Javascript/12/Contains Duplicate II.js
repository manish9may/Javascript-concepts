var containsNearbyDuplicate = function(nums, k) {
 var length = nums.length,hashNums = {};    
 for(var indicator = 0;indicator<length;indicator++){
 	if(hashNums[nums[indicator]]){
 		if(indicator - hashNums[nums[indicator]] <= k){
 			return true;
 		}
 	}
 	hashNums[nums[indicator]] = indicator;
 }
 return false;
};