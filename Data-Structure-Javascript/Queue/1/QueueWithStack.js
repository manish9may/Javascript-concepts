var Stack = require('../../Stacks/1/Stacks');

var QueueWithStack = function(){
	this.$pushStack = new Stack();
	this.$popStack = new Stack();
	this.$size = 0;
}

QueueWithStack.prototype = {
	moveToPop : function(){
		while(!this.$pushStack.empty()){
			this.$popStack.push(this.$pushStack.pop())
		}
	},
	moveToPush : function(){
		while(!this.$popStack.empty()){
			this.$pushStack.push(this.$popStack.pop())
		}
	},
	enqueue : function($element){
		this.moveToPush();
		this.$pushStack.push($element);
		this.$size ++;
	},
	dequeue : function(){
		this.moveToPop()
		this.$size --;
		return this.$popStack.pop();
	},
	empty : function(){
		return this.$popStack.empty() && this.$pushStack.empty();
	},
	back : function(){
		this.moveToPush();
		return this.$pushStack.peek();
	},
	front : function(){
		this.moveToPop();
		return this.$popStack.peek();
	},
	toString : function(){
		this.moveToPush();
		return this.$pushStack.toString();
	}
}

module.exports = QueueWithStack;