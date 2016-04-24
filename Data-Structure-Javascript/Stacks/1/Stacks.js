var Stack = function(){
	this.$dataStore = [];
	this.$top = 0;
}

Stack.prototype = {
	push : function($element){
		Array.prototype.splice.call(this.$dataStore,this.$top,0,$element);
		++this.$top;
	},
	pop : function(){
		if(this.$top !== 0){
			this.$top--;
			return Array.prototype.splice.call(this.$dataStore,this.$top,1)[0];
		}
		return undefined;
		
	},
	peek : function(){
		if(this.$top !== 0){
			return this.$dataStore[this.$top - 1];	
		}
		return undefined;
	},
	length : function(){
		return this.$top;
	},
	clear : function(){
		var stackSize = this.$top;
		this.$top = 0;
		return Array.prototype.splice.call(this.$dataStore,0,stackSize);

	},
	toString : function(){
		return this.$dataStore.toString();
	}
};


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
stack.clear();
console.log("length: " + stack.length());
console.log('stack.peek()		',stack.peek());
stack.push("Alwar");
console.log('stack.peek()		',stack.peek());

console.log('\n######## Stack #############\n')
console.log('stack.toString()				',stack.toString(),'\n');
console.log('\n######## Stack #############\n')
console.log('\n######## Convert Base #############\n')
var convertBase = function(number,base){
	var s = new Stack();
	do {
		s.push(number % base);
		number = Math.floor(number /= base)
	}while(number > 0)
	var returnNum = '';
	while(s.length()){
		returnNum += s.pop();
	}
	return parseInt(returnNum,10)
}
console.log('convertBase(9,2)			',convertBase(9,2))


console.log('\n######## Palindrom Without Stack #############\n')

var isPalindrom = function(words){
	if(words && typeof words !== 'undefined'){
		var wordsArray = words.toString().split('');
		var wordsStoreArray = wordsArray;
		var reverseWord = Array.prototype.reverse.call(wordsArray).join('');
		return reverseWord == words;
	}
	return false;
	
}

console.log('isPalindrom(121)				',isPalindrom(121))
console.log('isPalindrom(\'aba\')				',isPalindrom('aba'))



console.log('\n######## Palindrom With Stack #############\n')

var isPalindromWithStack = function(words){
	if(words && typeof words !== 'undefined'){
		var s = new Stack()
		var wordsArray = words.toString().split('');
		Array.prototype.forEach.call(wordsArray,function(value,index){
			s.push(value);
		});
		var reverseWord = '';
		while(s.length()){
			reverseWord += s.pop();
		}

		return reverseWord == words;
	}

	return false;
}

console.log('isPalindromWithStack(121)				',isPalindromWithStack(121))
console.log('isPalindromWithStack(\'abc\')				',isPalindromWithStack('abc'))



