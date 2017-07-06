var mergeSort = (listOfData) => {
	if (listOfData.length < 2)
        return listOfData;
	var mid = Math.floor(listOfData.length/2);
	var left =  listOfData.slice(0,mid);
	var right = listOfData.slice(mid,listOfData.length);
	return merge(mergeSort(left),mergeSort(right));
}

var merge = (left,right) =>{
	var result = [];
	while(left.length && right.length){
		if(left[0] <= right[0]){
			result.push(left.shift());
		}else{
			result.push(right.shift());
		}
	}
	while(left.length){
		result.push(left.shift());
	}
	while(right.length){
		result.push(right.shift());
	}
	return result;
}

console.log(mergeSort([1,2,3,4,5,6]));