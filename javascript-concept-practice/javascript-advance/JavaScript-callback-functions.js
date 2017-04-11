/**Simple Callback Example**/

let x = function(){
	console.log('I am called from inside a function')
}

let y = function(callback){
	console.log('doSomthing');
	callback();
}
y(x);

/** Make abstract using callback **/
let add = function(a,b){
	return a + b;
}
let multiply = function(a,b){
	return a * b;
}
let doWhatever = function(a,b){
	console.log('here are yor two numbers back ',a,' ',b);
}
let calc = function(num1,num2,callback){
	if(typeof callback === 'function'){
		return callback(num1,num2);	
	}
	
}

console.log(calc(2,4,add));
console.log(calc(2,4,doWhatever));


var myArray = [{
	num : 5,
	str : 'apple'
},{
	num : 7,
	str : 'cabbge'
},{
	num : 3,
	str : 'banana'
}]

/** Anonymous callback function**/

console.log(calc(6,4,function(a,b){return a - b}));

myArray.sort(function(a,b){
	return a.num - b.num;
});

console.log(myArray)
