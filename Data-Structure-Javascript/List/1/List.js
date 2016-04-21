var List = function(){
	this.$dataStore = [];
	this.$listSize = 0;
}
List.prototype = {
	append : function($element){
		this.$dataStore[this.$listSize++] = $element;
	},
	find : function($element){
		/*Array.prototype.forEach.call(this.dataStore,function(element,index){
			if(element === $element){
				return index;
			}
		});*/
		return Array.prototype.findIndex.call(this.$dataStore,function(element,index){return element === $element});
	},
	remove : function($element){
		var $itemIndex = this.find($element);
		if($itemIndex > -1){
			this.size -- ;
			return Array.prototype.splice.call(this.$dataStore,$itemIndex,1);
		}
		throw new Error('Not Found!');
	},
	length : function(){
		return this.$listSize;
	},
	toString : function(){
		return this.$dataStore.toString();
	},
	clear : function(){
		Array.prototype.splice.call(this.$dataStore,0,this.$listSize);
		this.size = 0;
	},
	insertAfter : function($element,$afterElement){
		var $itemIndex = this.find($afterElement);
		if($itemIndex > -1){
			Array.prototype.splice.call(this.$dataStore,$itemIndex + 1,0,$element);
			return this.$listSize++;
		}else{
			throw new Error('Not Found!');		
		}
	}
};


var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
console.log('List.toString()			',names.toString());
console.log('List.find("Raymond")			',names.find("Raymond"));
console.log('List.insertAfter("Manish Jain","Raymond")			',names.insertAfter("Manish Jain","Raymond"));

console.log('List.toString()			',names.toString(),'\n');

console.log('List.remove()			',names.remove("Bryan"));

console.log('List.toString()			',names.toString(),'\n');