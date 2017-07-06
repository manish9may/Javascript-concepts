const bubbleSort = (listOfData) =>{
	if(typeof listOfData === 'object' && listOfData.constructor  === Array){
		for(let i = 0;i < listOfData.length - 1;i++){
			for(let j = i + 1; j < listOfData.length;j++){
				if(listOfData[i] > listOfData[j]){
					let temp = listOfData[i];
					listOfData[i] = listOfData[j];
					listOfData[j] = temp;
				}
			}
		}
		return listOfData;
	}
	return [];
}

console.log(bubbleSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
console.log(bubbleSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
console.log(bubbleSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]