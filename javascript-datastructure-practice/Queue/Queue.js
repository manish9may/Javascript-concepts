var Queue = function(){
	this.dataStore = [];
}

Queue.prototype = (function(){
	let enqueue = function(data){
		this.dataStore.push(data);
	}
	let dequeue = function(){
		return this.dataStore.shift();
	}
	let front = function(){
		return this.dataStore[0];
	}
	let back = function(){
		return this.dataStore[this.dataStore.length - 1]
	}
	let toString = function(){
		return this.dataStore.toString();
	}
	let empty = function(){
		return this.dataStore.length === 0;
	}
	return {
		enqueue : enqueue,
		dequeue : dequeue,
		front : front,
		back : back,
		empty : empty,
		toString : toString
	};
})();

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log('q.toString()			',q.toString(),'\n');
q.dequeue();
console.log('q.toString()			',q.toString(),'\n');

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());