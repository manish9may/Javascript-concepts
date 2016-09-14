var List = function(){
	this.dataStore = [];
	this.listSize = 0;
	this.position = -1;
}

List.prototype = {
	append : function($element){
		if(typeof $element === 'undefined' || $element === null){
			throw new Error('Invalid Input!')
		}
		this.dataStore.push($element);
		this.listSize++;
		this.position++;
	},
	find : function($element){
		if(typeof $element === 'undefined' || $element === null){
			throw new Error('Invalid Input!')
		}
		for(var index = 0;index < this.listSize;index++){
			if(this.dataStore[index] === $element){
				return index;
			}
		}
		return -1;
	},
	remove : function($element){
		var itemIndex = this.find($element);
		if(itemIndex !== -1){
			this.listSize--;
			this.position--;
			return this.dataStore.splice(itemIndex,1);
		}
		return false;
	},
	length : function(){
		return this.listSize;
	},
	toString : function(){
		return this.dataStore.toString();
	},
	clear : function(){
		this.dataStore = [];
		this.listSize = 0;
		this.position = -1;
	},
	insertAfter : function($element,$afterPosition){
		if(typeof $afterPosition === 'undefined' || $afterPosition === null || $afterPosition > this.listSize || $afterPosition < 1){
			throw new Error('Invalid position!');
		}else if(typeof $element === 'undefined' || $element === null){
			throw new Error('Invalid Input!')
		}else{
			this.dataStore.splice($afterPosition,0,$element);
		}
	}
}
var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
console.log('List.toString()			',names.toString());
console.log('List.find("Raymond")			',names.find("Raymond"));
console.log('List.insertAfter("Manish Jain",2)			',names.insertAfter("Manish Jain",2));

console.log('List.toString()			',names.toString(),'\n');

console.log('List.remove("Bryan")			',names.remove("Bryan"));

console.log('List.toString()			',names.toString(),'\n');
