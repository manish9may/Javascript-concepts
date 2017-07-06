var productExceptSelf = function(nums) {
	if(nums.length < 3){
		return nums.reverse();
	}
	var p = [1], q = [],result = [];
	q[nums.length - 1] = 1;
	for(var index = 0 ,n = nums.length - 1; index < n;index++){
		p[index+1] = p[index] * nums [index];
		q[n - index - 1] = q[n - index] * nums [n - index];
	}
	for(var index = 0;index < nums.length;index++){
		result[index] = p[index] * q[index];
	}
	return result;
}
console.log('productExceptSelf(['+1,2,3,4+'])         ',productExceptSelf([1,2,3,4]))