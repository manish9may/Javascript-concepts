const selectionSort = (listOfData) =>{
	let minIndex;
		for(let i = 0;i < listOfData.length - 1;i++){
			minIndex = i;
			 for(let j = i + 1;j < listOfData.length;j++){
			 	if(listOfData[j] < listOfData[minIndex]){
			 		minIndex = j;
			 	}
			 }
			 if(minIndex !== i){
			 	let tmp = listOfData[i];
			 	listOfData[i] = listOfData[minIndex];
			 	listOfData[minIndex] = tmp;	
			 }
			 
		}
		return listOfData;
}

console.log(selectionSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
console.log(selectionSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
console.log(selectionSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]