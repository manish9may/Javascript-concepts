const insertionSort = (listOfData) => {
	for(let i = 1; i < listOfData.length;i++){
		let tmp = listOfData[i],j = i - 1;
		
		for(;j >=0 && listOfData[j] > tmp;j--){
			listOfData[j+1] = listOfData[j]
		}

		listOfData[j + 1] = tmp;
	}
	return listOfData;
}

console.log(insertionSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
console.log(insertionSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
console.log(insertionSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]