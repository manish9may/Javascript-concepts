var summaryRanges = function(nums) {
	var result = [],start = nums[0],end;
	for(var i = 0 ;i<nums.length;i++){
		if(i+1 !== nums.length && nums[i+1] - nums[i] !== 1){
			end = nums[i]+'';
			if(end === start){
				result.push(start)
			}else{
				result.push(start+'->'+end)
			}
			start = nums[i+1] + '';
		}else if(i+1 === nums.length){
			end = nums[i]+'';
			if(end === start){
				result.push(start)
			}else{
				result.push(start+'->'+end)
			}
		}
	}
	return result;
}

console.log('summaryRanges(['+0,1,2,4,5,7+'])           ',summaryRanges([0,1,2,4,5,7]))