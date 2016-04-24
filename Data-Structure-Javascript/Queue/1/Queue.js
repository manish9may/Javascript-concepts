var Queue = function(){
	this.$dataStore = [];
}
Queue.prototype = {
	enqueue : function($element){
		this.$dataStore.push($element);
	},
	dequeue : function(){
		return this.$dataStore.shift();
	},
	front : function(){
		return this.$dataStore[0];
	},
	back : function(){
		return this.$dataStore[this.$dataStore.length - 1];
	},
	toString : function(){
		return this.$dataStore.toString();
	},
	empty : function(){
		return this.$dataStore.length === 0;
	},
	dequeueOnPriority : function(key){
		var priority = this.$dataStore[0][key];
		Array.prototype.forEach.call(this.$dataStore,function(data,index){
			if(data[key] < priority){
				priority = data[key];
			}
		});
		var priorityIndex = Array.prototype.findIndex.call(this.$dataStore,function(data,index){
						return data[key] === priority;
		});
		return Array.prototype.splice.call(this.$dataStore,priorityIndex,1);
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
nums[i] = Math.floor(Math.floor(Math.random() * 101));
queues[i] = new Queue();
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

console.log('\n########### Priority Queue ###########\n')
var Patient = function(name,code){
	this.name = name;
	this.code = code;
}

Patient.prototype = {
	toString : function(){
		return this.name+' code: '+this.code;
	}
}

var p = new Patient("Smith",5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log('\n\n'+ed.toString());

var seen = ed.dequeueOnPriority('code');
console.log('\n\n'+"Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

// another round
var seen = ed.dequeueOnPriority('code');
console.log('\n\n'+"Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

// another round
var seen = ed.dequeueOnPriority('code');
console.log('\n\n'+"Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
