var source = new Stack();
var target = new Stack();
var helper = new Stack();

source.push('disk 1');
source.push('disk 2');
source.push('disk 3');
console.log('source				',source.toString());


var towerOfHanoi = function(n,source,helper,target){
	if(n <= 0 ){
		return;
	}
	towerOfHanoi(n-1,source,target,helper);
	target.push(source.pop());
	towerOfHanoi(n-1,helper,source,target);
};

towerOfHanoi(source.length(),source,helper,target);

console.log('target				',target.toString());