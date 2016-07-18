var maxProfit = function(prices) {
	if(prices === null || prices.length === 0){
	        return 0;
	}
	var max = 0,min = Infinity,diff = 0;
	for(var i = 0;i< prices.length;i++){
		var price = prices[i];
		if(min > price){
			min = price;
		}
		diff =  price - min;

		if(max < diff){
			max = diff;
		}
	}	
	return max;
}

console.log('maxProfit(['+7, 1, 5, 3, 6, 4+'])				',maxProfit([7, 1, 5, 3, 6, 4]))