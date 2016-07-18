var moveZeroes = function (nums) {
	var temp;
	for(var i = 0,j = 0;i<nums.length;i++){
		if(nums[i] !== 0){
			temp = nums[i];
			nums[i] = nums[j]
			nums[j] = temp
			j++;
		}
	}
	return nums;
}

console.log('moveZeroes('+[1, 0, 2, 1, 0, 3, 0, 0, 5]+')         ',moveZeroes([1, 0, 2, 1, 0, 3, 0, 0, 5]))