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
};
var QueueWithStack = function(){
	this.pushStack = new Stack();
	this.popStack = new Stack();
}
QueueWithStack.prototype = {
	moveToPushStack : function(){
		while(!this.popStack.empty()){
			this.pushStack.push(this.popStack.pop());
		}
	},
	moveToPopStack : function(){
		while(!this.pushStack.empty()){
			this.popStack.push(this.pushStack.pop())
		}
	},
	enqueue : function($element){
		this.moveToPushStack();
		this.pushStack.push($element)
	},
	dequeue : function(){
		this.moveToPopStack();
		return this.popStack.pop();
	},
	front : function(){
		this.moveToPopStack();
		return this.popStack.peek();
	},
	back : function(){
		this.moveToPushStack();
		return this.pushStack.peek();	
	},
	toString : function(){
		this.moveToPushStack();
		return this.pushStack.toString();

	}
};

var q = new QueueWithStack();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
q.enqueue("Jack");
q.enqueue("Andrew");
console.log('q.toString()			',q.toString(),'\n');
q.dequeue();
console.log('q.toString()			',q.toString(),'\n');

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());
