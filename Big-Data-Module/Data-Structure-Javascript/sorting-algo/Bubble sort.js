var bubbleSort = function(items){
	var k = 0;
	for(var i = 0;i < items.length - 1;i++){
		k++;
		for(var j = i+1;j<items.length;j++){
			k++;
			if(items[i] > items[j]){
				var temp = items[i];
				items[i] = items[j];
				items[j] = temp;
			}
		}
	}
	return items;
}
// O(N^2) complexity
console.log('bubbleSort([34, 23, 12, 45, 9, 1, 24])      ',bubbleSort([34, 23, 12, 45, 9, 1, 24]))