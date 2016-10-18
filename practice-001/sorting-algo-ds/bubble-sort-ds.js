var bubbleSort = function(items){
	for(var i = 0;i < items.length - 1;i++){
		for(var j = i + 1;j < items.length;j++){
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
console.log2('bubbleSort([34, 23, 12, 45, 9, 1, 24])      ',bubbleSort([34, 23, 12, 45, 9, 1, 24]))