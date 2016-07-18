var removeElement = function (nums,val) {
	for(var i = 0;i<nums.length;i++){
		if(nums[i] === val){
			nums.splice(i,1);
		}
	}
	return nums.length;
}

console.log('removeElement(['+[3,2,2,3]+'],'+3+')          '+removeElement([3,2,2,3],3))