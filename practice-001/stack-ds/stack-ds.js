var Stack = function(){
	this.dataStore = [];
	this.top = 0;
}
Stack.prototype = {
	push : function($element){
		if(typeof $element === 'undefined' || $element === null){
			throw new Error('Invalid Input!');
		}
		this.dataStore[this.top++] = $element;
	},
	pop : function(){
		return this.dataStore[--this.top];
	},
	peek : function(){
		return this.dataStore[this.top - 1];
	},
	length : function(){
		return this.top;
	},
	clear : function(){
		this.dataStore = [];
		this.top = 0;
	},
	empty : function(){
		return this.top === 0;
	},
	toString : function(){
		return this.dataStore.toString();
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
	var stack = new Stack();
	while(number > 0){
		stack.push(Math.floor(number % base));
		number = Math.floor(number / base);
	}
	var result = '';
	while(!stack.empty()){
		result += stack.pop();
	}
	return result;
}
console.log('convertBase(9,2)			',convertBase(10,2))
var isPalindrom = function(words){
	if(typeof words === 'undefined' || words === null){
		throw new Error('Invalid Input!');
	}
	words = words.toString();
	var stack = new Stack();
	for(var i = 0;i <  words.length;i++){
		stack.push(words.charAt(i));
	}
	var result = '';
	while(!stack.empty()){
		result += stack.pop();
	}
	return words === result;
}

console.log('isPalindrom(121)				',isPalindrom(121))
console.log('isPalindrom(\'aba\')				',isPalindrom('aba'))
var Factorial = function(number){
	if(typeof number === 'undefined' || number === null || isNaN(number)){
		throw new Error('Invalid Input Number!');
	}
	if(number === 0){
		return 1;
	}else{
		return number * Factorial(number - 1);
	}
}
console.log('Factorial(6)			',Factorial(6));