var Stack = function(){
	this.$dataStore = [];
	this.$top = 0;
}

Stack.prototype = {
	push : function($element){
		Array.prototype.splice.call(this.$dataStore,this.$top,0,$element);
		++this.$top;
	},
	pop : function(){
		if(this.$top !== 0){
			this.$top--;
			return Array.prototype.splice.call(this.$dataStore,this.$top,1)[0];
		}
		return undefined;
		
	},
	peek : function(){
		if(this.$top !== 0){
			return this.$dataStore[this.$top - 1];	
		}
		return undefined;
	},
	length : function(){
		return this.$top;
	},
	clear : function(){
		var stackSize = this.$top;
		this.$top = 0;
		return Array.prototype.splice.call(this.$dataStore,0,stackSize);

	},
	empty : function(){
		return this.$top === 0;
	},
	toString : function(){
		return this.$dataStore.toString();
	}
};
module.exports = Stack;