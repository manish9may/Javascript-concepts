var insertionSort = function(items){
var k = 0;
	for(var i = 1;i < items.length ;i++){
		var temp = items[i],j = i - 1;
		for(;j >=0 && (items[j] > temp) ; j--){
			items[j+1] = items[j];
		}
		items[j+1] = temp;
	}
	return items;
}

// O(N) complexity
console.log('insertionSort([34, 23, 12, 45, 9, 1, 24])      ',insertionSort([34, 23, 12, 45, 9, 1, 24]));