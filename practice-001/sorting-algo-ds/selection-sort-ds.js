var selectionSort = function(items){
	for(var i = 0; i < items.length - 1;i++){
		var min = i;
		for(var j = i + 1;j < items.length;j++){
			if(items[j] < items[min]){
				min = j;
			}
		}
		if(min !== i){
			var temp = items[i];
			items[i] = items[min];
			items[min] = temp;
		}
	}
	return items;
}

// O(N^2) complexity
console.log2('selectionSort([34, 23, 12, 45, 9, 1, 24])      ',selectionSort([34, 23, 12, 45, 9, 1, 24]))