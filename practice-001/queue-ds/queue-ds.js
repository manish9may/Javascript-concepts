var Queue = function(){
	this.dataStore = [];
}
Queue.prototype = {
	enqueue : function($element){
		if(typeof $element === 'undefined' || $element === null){
			throw new Error('Invalid Input!');
		}
		this.dataStore.push($element);
	},
	dequeue : function(){
		return this.dataStore.shift();
	},
	front : function(){
		return this.dataStore[0];
	},
	back : function(){
		return this.dataStore[this.dataStore - 1];
	},
	toString : function(){
		return this.dataStore.toString();
	},
	empty : function(){
		return this.dataStore.length === 0;
	}
}

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log('q.toString()			',q.toString(),'\n');
q.dequeue();
console.log('q.toString()			',q.toString(),'\n');

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());
console.log('\n######### Radix Sort ##########\n')

var nums = [];
var queues = [];
for (var i = 0; i < 10; ++i) {
nums[i] = Math.floor(Math.floor(Math.random() * 807));
queues[i] = new Queue();
}

console.log("\n\nBefore radix sort: ");
console.log(nums.toString())

var radixSort = function(){
	var result = [];
	for(var i = 0;i < nums.length;i++){
		queues[Math.floor(nums[i] % 10)].enqueue(nums[i]);
	}
	nums = [];
	for(var i = 0;i < queues.length;i++){
		while(!queues[i].empty()){
			nums.push(queues[i].dequeue());
		}
	}
	console.log(queues)
	for(var i = 0;i < nums.length;i++){
		queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);	
	}
	nums = [];
	for(var i = 0;i < queues.length;i++){
		while(!queues[i].empty()){
			nums.push(queues[i].dequeue());
		}
	}
	console.log(nums)
}
radixSort();

