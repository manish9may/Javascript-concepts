const QueueWithStack = function(){
	this.pushStack = new Stack();
	this.popStack = new Stack();
}

QueueWithStack.prototype = (function(){
	let moveToPop = function(){
		while(!this.pushStack.empty()){
			this.popStack.push(this.pushStack.pop());
		}	
	}
	let moveToPush = function(){
		while(!this.popStack.empty()){
			this.pushStack.push(this.popStack.pop());
		}
	}
	let enqueue = function(data){
		moveToPush.call(this);
		this.pushStack.push(data);
	}
	let dequeue = function(){
		moveToPop.call(this);
		return this.popStack.pop();
	}
	let toString = function(){
		moveToPush.call(this);
		return this.pushStack.toString();
	}
	let front = function(){
		moveToPop.call(this);
		return this.popStack.peek();
	}
	let back = function(){
		moveToPush.call(this);
		return this.pushStack.peek();
	}
	return {
		enqueue : enqueue,
		dequeue : dequeue,
		toString : toString,
		front : front,
		back : back
	}
})();

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