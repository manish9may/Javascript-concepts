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