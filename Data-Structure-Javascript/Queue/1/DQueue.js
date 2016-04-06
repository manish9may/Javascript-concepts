var DQueue = function(){
	this.dataStore = [];
}
DQueue.prototype.enqueue = function(element){
	this.dataStore.push(element);
}
DQueue.prototype.dequeue = function(){
	return this.dataStore.shift();
}
DQueue.prototype.front = function(){
	return this.dataStore[0];
}
DQueue.prototype.back = function(){
	return this.dataStore[this.dataStore.length - 1];
}
DQueue.prototype.empty = function(){
	return this.dataStore.length == 0 ? true : false;
}
DQueue.prototype.toString = function(){
	return this.dataStore.toString();
}
DQueue.prototype.insertAtFront = function(element){
	this.dataStore.unshift(element);
}
DQueue.prototype.deleteAtLast = function(){
	return this.dataStore.pop();
}

var q = new DQueue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
q.insertAtFront('Jasica');

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());