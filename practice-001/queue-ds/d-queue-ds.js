var DQueue = function(){
	this.dataStore = [];
}
DQueue.prototype = {
	enqueue : function($element){
		if(typeof $element === 'undefined' || $element === null){
			throw new Error('Invalid Input!');
		}
		this.dataStore.push($element)
	},
	dequeue : function(){
		return this.dataStore.shift();
	},
	front : function(){
		return this.dataStore[0];
	},
	back : function(){
		return this.dataStore[this.dataStore.length - 1];
	},
	empty : function(){
		return this.dataStore.length === 0;
	},
	toString : function(){
		return this.dataStore.toString();
	},
	insertAtFront : function($element){
		if(typeof $element === 'undefined' || $element === null){
			throw new Error('Invalid Input!');
		}
		this.dataStore.unshift($element);
	},
	deleteFromLast : function(){
		return this.dataStore.pop();
	}
	
}

var q = new DQueue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log('q.toString()				',q.toString(),'\n');
console.log('q.dequeue()				',q.dequeue(),'\n');
console.log('q.toString()				',q.toString(),'\n');
q.insertAtFront('Jasica');

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());
