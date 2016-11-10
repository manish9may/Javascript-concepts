var Queue = function(){
	this.dataStore = [];
}
Queue.prototype = (function(){
	var enqueue = function($element){
		if(typeof $element === 'undefined' || $element === null){
			throw new Error('Invalid Input!');
		}else{
			this.dataStore.push($element);
		}
	};
	var dequeue = function(){
		return this.dataStore.shift();
	}
	var front = function(){
		return this.dataStore[0];
	}
	var back = function(){
		return this.dataStore[this.dataStore.length - 1];
	}
	var toString = function(){
		return this.dataStore.toString();
	}
	var empty = function(){
		return this.dataStore.length === 0;
	}
	return {
		enqueue : enqueue,
		dequeue : dequeue,
		front : front,
		back : back,
		toString : toString,
		empty : empty
	};
})();


var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log2('q.toString()			',q.toString(),'\n');
q.dequeue();
console.log2('q.toString()			',q.toString(),'\n');

console.log2("Front of queue: " + q.front());
console.log2("Back of queue: " + q.back());