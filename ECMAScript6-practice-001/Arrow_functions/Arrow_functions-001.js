const nums = [1,2,3,4,5,6,7,8,9];

const odds = nums.filter(num => num % 2 !== 0);

const evens = nums.filter((num) => {return num % 2 === 0})

console.logger('nums			',nums)
console.logger('odds			',odds)
console.logger('evens			',evens)

var adder = {
	base : 1,
	add : function(a){
		var f = (v) => {
			return v + this.base
		};
		return f(a);
	},
	addThruCall : function(a){
		var f = (v) => {
			return v + this.base;
		}
		var b =  {
			base : 2
		}
		return f.call(b,a);
	},
	addThruArg : function(){
		var f = () => {
			return  arguments[0] + this.base;
		}
		return f();
	},
	addThruArgs : function(){
		var f = (...args) => {
				return args[0] + this.base;
		}
		return f(arguments);
	}

}

console.logger('adder.add(1)			',adder.add(1));
console.logger('adder.addThruCall(2)			',adder.addThruCall(2));
console.logger('adder.addThruArg(3)			',adder.addThruArg(3));
console.logger('adder.addThruArg(4)			',adder.addThruArg(4));

var param = 'size';
var config1 = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.logger('config1			',config1); 


