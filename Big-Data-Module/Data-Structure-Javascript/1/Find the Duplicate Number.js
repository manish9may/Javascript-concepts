var  FindtheDuplicateNumber = function(array){
	array = array.slice().sort();
	var result = [];
	for(var index = 0;index < array.length - 1;index++){
		if(array[index + 1] === array[index]){
			result.push(array[index])
		}
	}
	return result;
}

var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];

console.log('FindtheDuplicateNumber('+arr+')       ',FindtheDuplicateNumber(arr))