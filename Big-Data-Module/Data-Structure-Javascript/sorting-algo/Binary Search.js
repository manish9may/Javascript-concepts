var binaryIndexOf = function(items,searchElement){
	var minIndex = 0,maxIndex = items.length,currentIndex,currentElelment;
	while(maxIndex >= minIndex){
		currentIndex =  Math.floor((minIndex + maxIndex)/2);
		currentElelment = items[currentIndex];
		if(currentElelment < searchElement){
			minIndex = currentIndex + 1;
		}else if(currentElelment > searchElement){
			maxIndex = currentIndex - 1;
		}else{
			return currentIndex;
		}
	}
	return null
}

console.log('binaryIndexOf(3)			',binaryIndexOf([2,7,5,1,34,3],3))