var QueueWithStack = require('./QueueWithStack');

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
console.log('\n######### Radix Sort ##########\n')
var nums = [];
var queues = [];
for (var i = 0; i < 10; ++i) {
nums[i] = Math.floor(Math.floor(Math.random() * 101));
queues[i] = new QueueWithStack();
}

console.log("\n\nBefore radix sort: ");
console.log(nums.toString())

var distribte = function(numbers,queues,digit){
	Array.prototype.forEach.call(numbers,function(object,index){
		if(digit === 1){
				queues[numbers[index] % 10].enqueue(object);
		}else{
			queues[Math.floor(numbers[index] /= 10)].enqueue(object);
		}		
	});
}

var collect = function(queues,numbers){
	var k = 0;
	Array.prototype.splice.call(numbers,0,numbers.length);
	Array.prototype.forEach.call(queues,function(queue,index){
		while(!queue.empty()){
			Array.prototype.splice.call(numbers,k,0,queue.dequeue());
			k++;
		}
	});
}

distribte(nums,queues,1);
collect(queues,nums)
distribte(nums,queues,10);
collect(queues,nums)
console.log("\n\nAfter radix sort: ");
console.log(nums.toString());