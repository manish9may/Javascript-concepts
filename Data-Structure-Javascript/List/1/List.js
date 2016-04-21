var List = function(){
	this.$dataStore = [];
	this.$listSize = 0;
	this.$position = 0;
}
List.prototype = {
	append : function($element){
		Array.prototype.splice.call(this.$dataStore,this.$listSize,0,$element);
		++this.$listSize;
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
			this.$listSize -- ;
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
		var listSize = this.$listSize;
		this.$listSize = 0;
		return Array.prototype.splice.call(this.$dataStore,0,listSize);
		
	},
	insertAfter : function($element,$afterElement){
		var $itemIndex = this.find($afterElement);
		if($itemIndex > -1){
			Array.prototype.splice.call(this.$dataStore,$itemIndex + 1,0,$element);
			return this.$listSize++;
		}else{
			throw new Error('Not Found!');		
		}
	},
	front : function(){
		this.$position = 0;
	},
	end : function(){
		this.$position = this.$listSize - 1;
	},
	next : function(){
		if(this.$position < this.$listSize){
				++this.$position;
		}
	},
	previous : function(){
		if(this.$position >= 0){
			--this.$position;
		}
	},
	currentPosition : function(){
		return this.$position;
	},
	moveToPosition : function(position){
		if(position < this.$listSize){
			this.$position = position;
		}
	},
	getElement : function(){
		return this.$dataStore[this.$position];
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

names.front();
console.log('names.getElement()				',names.getElement(),'\n');


console.log('\n################## Reverse Loop #################\n')
for(names.end();names.currentPosition() >= 0 ; names.previous()){
	console.log('names.getElement('+names.currentPosition()+')				',names.getElement(),'\n');
}
console.log('\n################## Front Loop #################\n')
for(names.front();names.currentPosition() < names.length() ; names.next()){
	console.log('names.getElement('+names.currentPosition()+')				',names.getElement(),'\n');
}

console.log('names.clear()				',names.clear(),'\n')
console.log('List.toString()			',names.toString(),'\n');