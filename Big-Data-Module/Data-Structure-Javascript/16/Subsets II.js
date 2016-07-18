var subsetsWithDup = function(nums) {
	nums = nums.sort();
	var result = [[]];
    var current = [];
    generate(nums, 0, current, result);
    return result;
}
var generate = function(nums, index, current, result){
	for(var i = index; i < nums.length; i++){
		var num = nums[i];
		current.push(num);
        result.push(current.slice());
        generate(nums, i + 1, current, result);
        current.pop();
        while(i < nums.length - 1 && nums[i] === nums[i+1]){
        	i++;
        }
	}
}

console.log('subsetsWithDup(['+1,2,2+'])         ',subsetsWithDup([1,2,2]));