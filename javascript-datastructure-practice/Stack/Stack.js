const Stack = function(){
	this.dataSource = [];
	this.top = -1;
}

Stack.prototype = (function(){
	let push = function(data){
		this.dataSource[++this.top] = data;
	}
	let pop = function(){
		this.top--;
		return this.dataSource.pop();
	}
	let peek = function(){
		return this.dataSource[this.top];
	}
	let empty = function(){
		return this.top === -1;
	}
	let clear = function(){
		this.dataSource = [];
		this.top = -1;
	}
	let toString = function(){
		return this.dataSource.toString();
	}
	let length = function(){
		return this.top + 1;
	}
	return {
		push : push,
		pop : pop,
		peek : peek,
		empty : empty,
		clear : clear,
		toString : toString,
		length : length
	};
})();
