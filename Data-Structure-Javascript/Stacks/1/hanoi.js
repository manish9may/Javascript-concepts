var Stack = require('./Stacks');

var source = new Stack();
var target = new Stack();
var helper = new Stack();
source.push('disk 3');
source.push('disk 2');
source.push('disk 1');
console.log('source				',source.toString())
var towerOfHanoi = function(source,helper,target){
	var moveDisks = function(n,source,helper,target){
		if(n <= 0){
			return;
		}
		moveDisks(n - 1,source,target,helper);
		target.push(source.pop());
		moveDisks(n - 1,helper,source,target);
	};
	 moveDisks(source.length(), source, helper, target);
};
towerOfHanoi(source,helper,target)

console.log('target				',target.toString())
