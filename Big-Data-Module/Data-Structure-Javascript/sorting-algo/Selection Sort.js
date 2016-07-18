var selectionSort = function(items){
	for(var i = 0;i< items.length - 1;i++){
		var min = i;
		for(var j = i+1;j< items.length;j++){
			if(items[min] > items[j]){
				min = j;
			}
		}
		if(min != i){
		  var tmp = items[i];
          items[i] = items[min];
          items[min] = tmp;
		}
	}
	return items;
}

// O(N^2) complexity
console.log('selectionSort([34, 23, 12, 45, 9, 1, 24])      ',selectionSort([34, 23, 12, 45, 9, 1, 24]))