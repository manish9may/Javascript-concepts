const secondSmallest = (listOfData) => {
	let first = Number.MAX_VALUE,second = Number.MAX_VALUE;
	for(let i = 0;i < listOfData.length;i++){
		if(listOfData[i] < first){
			second = first
			first = listOfData[i];
		}else if(listOfData[i] < second){
			second = listOfData[i];
		}
	}
	return second;
}

console.log('secondSmallest([2,5,8,1,4,7])	',secondSmallest([2,5,8,1,4,7]));