var removeDuplicates = function(nums) {
	var index = 0,oc =1;
	nums =  nums.sort();
	for(var i = 1;i < nums.length; i++){
		if(nums[index] === nums[i]){
			if(oc == 2){
				continue;
			}
			oc++;
		}else{
			oc = 1;
		}
		index++;
		nums[index] = nums[i]
	}
	return index + 1;
}

console.log('removeDuplicates(['+1,1,1,2,2,3+'])         ',removeDuplicates([1,1,1,2,2,3]))