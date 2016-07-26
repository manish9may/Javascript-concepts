var sortLibrary = function(){
	console.log('library before sort 	',library);
	for(var i = 1; i < library.length;i++){
		var temp = library[i],j = i - 1;
		for(;j >= 0 && (library[j]['libraryID'] > temp['libraryID']);j--){
			library[j + 1] = library[j]
		}
		library[j + 1] = temp
	}
	console.log('library after sort 	',library);
}

// tail starts here
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

sortLibrary();

var findSecondLargeNumber = function(items){
	var fLargest = 0,sLargest = 0;
	for(var i = 0;i < items.length;i++){
		if(items[i] > fLargest){
			sLargest = fLargest;
			fLargest = items[i]
		}else if(sLargest < items[i]){
			sLargest = items[i]
		}
	}
	return sLargest;
}
console.log('findSecondLargeNumber(['+799, -85, 8, -1, 6, 4, 3, -2, -15, 0, 207, 75, 785, 122, 17+'])              ',findSecondLargeNumber([799, -85, 8, -1, 6, 4, 3, -2, -15, 0, 207, 75, 785, 122, 17]));
var maxToysToBuy = function(prices,amount){
	prices = prices.sort(function(a,b){return a - b;});
	var count = 0,sumOfPrices = 0;
	for(var i = 0;i < prices.length;i++){
		sumOfPrices += prices[i];
		if(sumOfPrices < amount){
			count++;
		}else{
			break;
		}
	}
	console.log('count        ',count);
}
maxToysToBuy([1,12,5,111,200,1000,10],50);

var findtheDuplicateNumber = function(items,callback){
	var result = [];
	items = items.sort(function(a,b){return a - b});
	for(var i = 0;i < items.length - 1;i++){
		if(items[i] === items[i + 1]){
			result.indexOf(callback(items[i])) == -1 ? result.push(callback(items[i])) : false;
		}
	}
	return result;
}

var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];

console.log('findtheDuplicateNumber('+arr+')       ',findtheDuplicateNumber(arr,function(x){return x;}));

var firstMissingPositive = function(items,callback){
	var result = [],k = 1;
	items = items.sort(function(a,b){return a - b;})
	if(items.length === 0 || items[items.length - 1] <= 0){
		result.push(callback(1));
		return result;
	}else{
		for(var i = 0;i < items.length;i++){
			if(items[i] > k){
				result.push(callback(k));
				return result;
			}
			k = items[i] < k ? k : k + 1;
		}
	}
	result.push(callback(items[items.length - 1] + 1));
	return result;
}

console.log('firstMissingPositive('+[3,4,-1,1]+')       ',firstMissingPositive([3,4,-1,1],function(x){return x;}));

var singleNumber = function(items,callback){
	items = items.sort(function(a,b){return a - b});
	var hasNums = {},result = [];
	for(var i = 0;i < items.length;i++){
		if(!hasNums[items[i]]){
			hasNums[items[i]] = 1;
		}else{
			hasNums[items[i]]++;
		}
	}
	for(var key in hasNums){
		if(hasNums[key] === 1){
			result.push(callback(key));
		}
	}
	return result;
}

console.log('singleNumber('+[5,5,9,9,2,2,4,7,7,5]+')         '+singleNumber([5,5,9,9,2,2,4,7,7,5,12],function(x){return x;}));

var moveZeroes = function(items){
	for(var i = 0,j = 0;i < items.length;i++){
		if(items[i] !== 0){
			var temp = items[i];
			items[i] = items[j];
			items[j] = temp;
			j++;
		}
	}
	return items;
}

console.log('moveZeroes('+[1, 0, 2, 1, 0, 3, 0, 0, 5]+')         ',moveZeroes([1, 0, 2, 1, 0, 3, 0, 0, 5]));

var productExceptSelf = function(items,callback){
	var p = [1],q = [],result = [];
	q[items.length - 1] = 1;
	for(var i = 0,n = items.length - 1;i < n;i++){
		p[i + 1] = p[i] * items[i];
		q[n - i - 1] = q[n - i] * items[n - i];
	}
	for(var i = 0;i < items.length;i++){
		result.push(callback(q[i] * p[i]));
	}
	return result;
}

console.log('productExceptSelf(['+1,2,3,4+'])         ',productExceptSelf([1,2,3,4],function(x){return x;}));


var maxProduct = function(items){
	var max = items[0],min = items[0],result = items[0];
	for(var i = 1;i < items.length;i++){
		var tMax = items[i] * max;
		var tMin = items[i] * min;
		max = Math.max(Math.max(tMax,items[i]),tMin);
		min = Math.min(Math.min(tMax,items[i]),tMin);
		result = Math.max(max,result);
	}
	return result;
}

console.log('maxProduct(['+6, -3, -10, 0, 2+'])          ',maxProduct([6, -3, -10, 0, 2]))

var maxSubArray = function(items){
	var maxSum = 0,sum = 0;
	for(var i = 0;i < items.length;i++){
		sum += items[i]
		maxSum = Math.max(maxSum,sum);
		if(sum < 0){
			sum = 0;
		}
	}
	return maxSum;
}
console.log('maxSubArray([−2,1,−3,4,−1,2,1,−5,4])            ',maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

var majorityElement = function(items,callback){
	var hasNums = {},result = [];
	for(var i = 0;i < items.length;i++){
		if(result.indexOf(callback(items[i])) > -1){
			continue;
		}
		else if(!hasNums[items[i]]){
			hasNums[items[i]] = 1;
		}else{
			hasNums[items[i]]++;
		}
		if(hasNums[items[i]] > Math.floor(items.length/3)){
			result.push(callback(items[i]));
		}

	}
	return result;
}

console.log('majorityElement(['+1,2,3,3,3,3,5,6+'])           ',majorityElement([1,2,3,3,3,5,5,6],function(x){return x;}));

var summaryRanges = function(items){
	var start = items[0],end,result = [];
	for(var i = 0;i < items.length;i++){
		if(i + 1 !== items.length && items[i + 1] - items[i] !== 1){
			end = items[i] + '';
			if(start == end){
				result.push(start);
			}else{
				result.push(start+'->'+end);
			}
			start = items[i + 1] + '';
		}else if(i + 1 === items.length){
			end = items[i];
			if(start == end){
				result.push(start);
			}else{
				result.push(start+'->'+end);
			}
		}
	}
	return result;
}

console.log('summaryRanges(['+0,1,2,4,5,7+'])           ',summaryRanges([0,1,2,4,5,7]));

var minSubArrayLen = function(k,items){
	var start = 0,end = 0,runningSum = 0,result = items.length;
	while(start < items.length){
		if(runningSum < k && end < items.length){
			runningSum += items[end];
			end++;
		}else if(runningSum >= k){
			result = Math.min(result,end - start);
			runningSum -= items[start];
			start++;
		}else{
			break;
		}
	}
	return result;
}

console.log('minSubArrayLen(7,['+2,3,1,2,4,3+'])              '+minSubArrayLen(7, [2,3,1,2,4,3]))

var findPeakElement = function(items){
	if(items.length === 1){
		return 0;
	}else if(items.length === 2){
		return items[1] > items[0] ? 1 : 0;
	}else{
		var i = 1;
		for(;i < items.length - 1;i++){
			if(items[i] > Math.max(items[i + 1],items[i - 1])){
				break;
			}
		}
	}
	return items[0] > items[i] ? 0 : i;
}

console.log('findPeakElement(['+1, 2, 3, 1+'])           ',findPeakElement([1, 2, 3, 1]));

var findMin = function(items){
	var min = items[0];
	for(var i = 1;i < items.length;i++){
		if(min > items[i]){
			min = items[i];
		}
	}
	return min;
}

console.log('findMin(['+4,5,6,7,0,1,2+'])          '+findMin([4,5,6,7,0,1,2]));

var maxProfit = function(prices){
	var max = 0,min = Infinity,diff = 0;
	for(var i = 0;i < prices.length;i++){
		if(min > prices[i]){
			min = prices[i];
		}
		diff = prices[i] - min;
		if(max < diff){
			max = diff;
		}
	}
	return max;
}

console.log('maxProfit(['+7, 1, 5, 3, 6, 4+'])              ',maxProfit([7, 1, 5, 3, 6, 4]));

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
console.log('bubbleSort([34, 23, 12, 45, 9, 1, 24])      ',bubbleSort([34, 23, 12, 45, 9, 1, 24]));

var selectionSort = function(items){
	for(var i = 0;i < items.length - 1;i++){
		var min = i;
		for(var j = i + 1;j < items.length;j++){
			if(items[min] > items[j]){
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
console.log('selectionSort([34, 23, 12, 45, 9, 1, 24])      ',selectionSort([34, 23, 12, 45, 9, 1, 24]));

var insertionSort = function(items){
	for(var i = 1;i < items.length;i++){
		var temp = items[i],j = i - 1;
		for(;j >= 0 && (items[j] > temp);j--){
			items[j + 1] = items[j];
		}
		items[j + 1] = temp;
	}
	return items;
}
console.log('insertionSort([34, 23, 12, 45, 9, 1, 24])      ',insertionSort([34, 23, 12, 45, 9, 1, 24]));

var LoveLetterMystery = function(items){
	for(var i = 0;i < items.length;i++){
		var item = items[i].split(''), l = item.length,newCode = 0,count = 0,end = Math.floor(l/2);
		for(var j = 0; j <= end;j++){
			while(item[j] < item[l - j -1]){
				newCode = item[l - j -1].charCodeAt(0) - 1;
                item[l - j -1] = String.fromCharCode(newCode);
                count++;
			}
			while(item[j] > item[l - j -1]){
				newCode = item[j].charCodeAt(0) - 1;
                item[j] = String.fromCharCode(newCode);
                count++;
			}
		}
		console.log(items[i]+' --------> '+count);
	}
}

LoveLetterMystery(['abc','abcba','abcd','cba']);

var caeserCipher = function(input,offest){
	var output = '',charCode = 0,newCode = 0;
	for(var i = 0;i < input.length;i++){
		charCode = input.charCodeAt(i);
		if(charCode > 96 && charCode < 123){
			newCode = charCode + offest;
			while(newCode > 122){
				newCode -= 26;
			}
		}else if(charCode > 64 && charCode < 91){
			newCode = charCode + offest;
			while(newCode > 90){
				newCode -= 26;
			}
		}else{
			newCode = charCode;
		}
		output += String.fromCharCode(newCode);
	}
	console.log(output);
}

caeserCipher('middle-Outz',2);
/*
str = "zaZA";
console.log(str.charCodeAt(0));//122
console.log(str.charCodeAt(1));//97
console.log(str.charCodeAt(2));//90
console.log(str.charCodeAt(3));//65
*/


var cavityMap = function(items){
	for(var row = 1;row < items.length - 1;row++){
		var item = items[row];
		for(var col = 1;col < item.length - 1;col++){
			var current = items[row][col];
			var left = items[row][col - 1];
			var right = items[row][col + 1];
			var top = items[row - 1][col];
			var bottom = items[row + 1][col];
			if(top < current && bottom < current && left < current && right < current){
            	items[col][row] = 'X';
        	}
		}
	}
	for (var p = 0; p < items.length; p++) {
    	var output = "";
	    for (var q = 0; q < items.length; q++ ) {
	      	output += items[p][q];
	    }
    	console.log(output);
  	}
}

cavityMap([[1,1,1,2],[1,9,1,2],[1,8,9,2],[1,2,3,4]]);

var chocolateFeast = function(items){
	for(var i = 0;i < items.length;i++){
			var n = parseInt(items[i][0]);// amount to use
	        var c = parseInt(items[i][1]);// cost per choc.
	        var m = parseInt(items[i][2]);// no. of wrappers for each extra choc.
	        var n_chocs = Math.floor(n/c);// Number of chocs. initially and no. of wrappers
	        if(m > n_chocs){
            	var n_ext = 0;// no extra chocs.
        	}else{
        		n_ext = Math.floor(n_chocs/m);
        		var temp = n_ext,temp2 = n_chocs;
        		do{
        			var temp3 = Math.floor((temp + (temp2 % m))/m);
        			n_ext += temp3;
        			temp2 = temp;
        			temp = temp3;
        		}while(temp > 1)
        	}
        	 var output = n_chocs + n_ext;
        	 console.log(output);
	}
}

chocolateFeast([[10,2,5],[12,4,4],[6,2,2]]);
console.log('-----------------------');

var cutTheSticks = function(items){
	items = items.sort(function(a,b){return a - b;});
	var len = items.length;
	console.log(len);
	while(len > 1){
		if(items[0] === items[1]){
			len--;
			items.shift();
		}else{
			len--;
			items.shift();
			console.log(len)
		}
	}
}

cutTheSticks([5,4,4,2,2,8]);

var diagDiff = function(matrix){
	var pdSum = 0,sdSum = 0,n = matrix.length;
	for(var i = 0;i < matrix.length;i++){
		pdSum += matrix[i][i];
		sdSum += matrix[i][n - i - 1];
	}
	return Math.abs(pdSum - sdSum);
}
console.log('diagDiff([[11, 2, 4],[4, 5, 6],[10, 8, -12]])        ',diagDiff([[11, 2, 4],[4, 5, 6],[10, 8, -12]]));
var denaryToBinary = function(decimalNum){
	var result = [];
	while(decimalNum > 0){
		result.unshift(decimalNum % 2);
		decimalNum = Math.floor(decimalNum/2);
	}
	return result.join('')
}

console.log('denaryToBinary(4)        ',denaryToBinary(4));

var findPairs = function(items,k){
	var count = 0
	for(var i = 0;i < items.length - 1;i++){
		for(var j = i + 1;j < items.length;j++){
			if((items[i] + items[j]) % k === 0){
				count++;
			}
		}
	}
	console.log('count      ',count);
}
findPairs([1,3,2,6,1,2], 3);
var findDigits = function(digits){
	var count = 0;
    for(var i = 0;i < digits.length;i++){
    	var d = digits[i].split('');
    	for(var j = 0; j < d.length;j++){
    		if(digits[i] % d[j] === 0){
                count++;
            }
    	}
    	console.log(digits[i]+' ----> '+count);
        count = 0;
    }
}

findDigits(['12','1012']);

var primeCheck = function(num){
	if(num <= 1){
        return false;
    }else if(num === 2){
        return true;
    }else{
        var limit = Math.floor(Math.sqrt(num));
        for(var i = 2;i <=  limit;i++){
        	if(num % i === 0){
        		return false;
        	}
        }
    }
    return true;
}

console.log('primeCheck                 ',primeCheck(16))
var funnyStrings = function(inputs){
	for(var i = 0;i < inputs.length;i++){
		var input = inputs[i];
        var l = Math.floor(input.length/2);
        for(var j = 0;j <= l;j++){
        	if(Math.abs(input.charCodeAt(j) - input.charCodeAt(j + 1)) !== Math.abs(input.charCodeAt(l - j) - input.charCodeAt(l - j + 1))){
        		console.log("Not Funny");
                break;
        	}else{
                console.log("Funny");
                break;
            }
        }

	}
}

funnyStrings(['acxz','bcxz']);

var getDay = function(date){
	var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date(date);
    if(parseInt(d) != -1){
        var dayNum = d.getDay();
        console.log(dayArr[dayNum])
    }
}

getDay('10/11/2009');

var gcd = function(x,y){
	if(x == 0 || y == 0){
		return x + y;
	}
	return gcd(y, x % y);
}

console.log('gcd(2154, 458)     ',gcd(2154,458));

var Stack = function(){
	this.dataStore = [];
	this.top = 0;
}

Stack.prototype = {
	push : function($element){
		if(!$element){
			throw new Error('Invalid Input!')
		}else{
			this.dataStore.push($element);
			this.top++;
		}
	},
	pop : function(){
		if(this.top === 0){
			throw new Error('Empty Store!');
		}else{
			this.top--;
			return this.dataStore.pop();	
		}
		
	},
	peek : function(){
		if(this.top === 0){
			throw new Error('Empty Store!');
		}else{
			return this.dataStore[this.top - 1];
		}
	},
	toString : function(){
		return this.dataStore.toString();
	},
	length : function(){
		return this.top;
	},
	clear : function(){
		this.top = 0;
		this.dataStore = [];
	},
	empty : function(){
		return this.top === 0;
	}
}

var stack = new Stack();
stack.push("Clayton");
stack.push("Raymond");
stack.push("Cynthia");
stack.push("Jennifer");
stack.push("Bryan");
stack.push("Danny");
console.log('\n######## Stack #############\n')
console.log('stack.toString()				',stack.toString(),'\n');
console.log('\n######## Stack #############\n')
console.log("length: 		", stack.length());
console.log('stack.peek()		',stack.peek());
var popped = stack.pop();
console.log("The popped element is: " + popped);
console.log('stack.peek()		',stack.peek());
stack.push("Manish Jain");
console.log('stack.peek()		',stack.peek());


var QueueWithStack = function(){
	this.pushStack = new Stack();
	this.popStack = new Stack();
	this.size = 0;
}
QueueWithStack.prototype = {
	moveToPop : function(){
	while(!this.pushStack.empty()){
			this.popStack.push(this.pushStack.pop())
		}
	},
	moveToPush : function(){
		while(!this.popStack.empty()){
			this.pushStack.push(this.popStack.pop())
		}
	},
	enqueue : function($element){
		if($element){
			this.moveToPush();
			this.pushStack.push($element);
			this.size++;
		}else{
			throw new Error('Invalid Input!');
		}
	},
	dequeue : function(){
		if(this.size > 0){
			this.moveToPop();
			this.size--;
			return this.popStack.pop();
		}else{
			throw new Error('Empty Queue');
		}	
	},
	empty : function(){
		return this.size === 0;
	},
	toString : function(){
		this.moveToPush();
		return this.pushStack.toString();
	},
	back : function(){
		this.moveToPush();
		return this.pushStack.peek();
	},
	front : function(){
		this.moveToPop();
		return this.popStack.peek();
	}
}

var areParenthesisBalanced = function(string){
	var stack = new Stack();
	for(var i = 0;i < string.length;i++){
		var char = string.charAt(i);
		if(char === '(' || char === '{' || char === '['){
			stack.push(char);
		}else if(char === ')' || char === '}' || char === ']'){
			switch(char){
				case ')' :
					if(stack.empty()){
						return false;
					}else if(stack.pop() !== '('){
						return false;
					}
				break;
				case '}' :
					if(stack.empty()){
						return false;
					}else if(stack.pop() !== '{'){
						return false;
					}
				break;
				case ']' :
					if(stack.empty()){
						return false;
					}else if(stack.pop() !== '['){
						return false;
					}
				break;
			}
		}
	}
	return stack.empty();
}

console.log("areParenthesisBalanced('{()}[]')		",areParenthesisBalanced('{()}[]'));


var binaryIndexOf = function(items,searchElement){
	items = items.sort(function(a,b){return a - b;});
	var minIndex = 0,maxIndex = items.length - 1,currentIndex = 0,currentElement = null;
	while(minIndex <= maxIndex){
		currentIndex = Math.floor((minIndex + maxIndex)/2);
		currentElement = items[currentElement];
		if(currentElement < searchElement){
			minIndex = currentIndex + 1;
		}else if(currentElement > searchElement){
			maxIndex = currentIndex - 1;
		}else{
			return currentIndex;
		}
	}

	return -1;
}

console.log('binaryIndexOf(3)			',binaryIndexOf([2,7,3,5,1,34],3))

