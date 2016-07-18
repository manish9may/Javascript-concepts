var maxProfit = function(prices) {
	if(prices === null || prices.length === 0){
		        return 0;
	}
	var profit = 0;

    for(var i = 1; i < prices.length; i++){
    	var diff = prices[i] - prices[i-1]
    	if(diff > 0){
    		profit += diff;
    	}
    }
    return profit;
}

console.log('maxProfit(['+7, 1, 5, 3, 6, 4+'])				',maxProfit([7, 1, 5, 3, 6, 4]))