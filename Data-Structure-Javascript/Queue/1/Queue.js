var Queue = function(){
	this.dataStore = [];
}
Queue.prototype.enqueue = function(element){
	this.dataStore.push(element);
}
Queue.prototype.dequeue = function(){
	return this.dataStore.shift();
}
Queue.prototype.front = function(){
	return this.dataStore[0];
}
Queue.prototype.back = function(){
	return this.dataStore[this.dataStore.length - 1];
}
Queue.prototype.empty = function(){
	return this.dataStore.length == 0 ? true : false;
}
Queue.prototype.toString = function(){
	return this.dataStore.toString();
}
Queue.prototype.dequeueOnPriority = function(key){
	var priority = this.dataStore[0][key];
	for(var index = 1; index < this.dataStore.length ; ++index){
		if(this.dataStore[index][key] < priority){
			priority = index; 
		}
	}
	return this.dataStore.splice(priority,1);
}
var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());


var distribute = function(nums,queues,n,digit){
	for(var i = 0;i < n; ++i){
		if(digit == 1){
			queues[nums[i]%10].enqueue(nums[i])
		}else{
			queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
		}
	}
}

var collect = function(queues,nums,n){
	var k = 0;
	for(var i = 0;i < n; ++i){
		while(!queues[i].empty()){
			nums[k++] =  queues[i].dequeue();
		}
	}
}
function dispArray(arr) {
	console.log(arr.toString());
}
var queues = [];
for (var i = 0; i < 10; ++i) {
queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("\n\nBefore radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums,10);
distribute(nums, queues, 10, 10);
collect(queues, nums,10);
console.log("\n\nAfter radix sort: ");
dispArray(nums);


var Patient = function(name,code){
	this.name = name;
	this.code = code;
}
Patient.prototype.toString = function(){
	return this.name+' code: '+this.code;
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
var seen = ed.dequeueOnPriority('code');
console.log('\n\n'+"Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
