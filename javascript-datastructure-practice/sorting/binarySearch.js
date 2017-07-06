let binaryIndexOf = (listOfData,searchElement) => {
	let minIndex = 0,maxIndex = listOfData.length,currentIndex,currentElement;
	while(maxIndex >= minIndex){
		currentIndex = Math.floor((minIndex + maxIndex)/2);
		currentElement = listOfData[currentIndex];
		if(currentElement < searchElement){
			minIndex = currentIndex + 1;
		}else if(currentElement > searchElement){
			maxIndex = currentIndex - 1
		}else{
			return currentIndex; 
		}
	} 
	return null;
}

console.log('binaryIndexOf(3)			',binaryIndexOf([2,7,5,1,34,3],3))