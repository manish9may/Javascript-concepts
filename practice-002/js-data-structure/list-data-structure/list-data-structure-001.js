var List = function(){
	this.dataStore = [];
	this.listSize = 0;
};

List.prototype = (function(){
	var append = function($element){
		if(typeof $element === 'undefined' || $element === null){
			throw new Error('Invalid Input');
		}else{
			this.dataStore.push($element);
			this.listSize++;
		}
	}
	var find = function($element){
		if(typeof $element === 'undefined' || $element === null){
			throw new Error('Invalid Input');
		}else{
			for(var index in this.dataStore){
				if(this.dataStore[index] === $element){
					return index;
				}
			}
		}
		return -1;
	};
	var remove = function($element){
		var itemIndex = find.apply(this,[$element]);
		if(itemIndex > -1){
			this.dataStore.splice(itemIndex,1);
			this.listSize--;
			return true;
		}
		return false;
	};
	var length = function(){
		return this.listSize;
	}
	var toString = function(){
		return this.dataStore.toString();
	}
	var clear = function(){
		this.dataStore = [];
		this.listSize = 0;
	}
	var insertAfter = function($element,$afterPosition){
		$afterPosition = parseInt($afterPosition,10);
		if(typeof $element === 'undefined' || $element === null){
			throw new Error('Invalid Input');
		}else if(isNaN($afterPosition)  || $afterPosition < 0 || $afterPosition >= this.listSize){
			throw new Error('Invalid Position');
		}else{
			this.dataStore.splice($afterPosition,0,$element);
		}
		return true;
	}
	return {
		append : append,
		remove : remove,
		length : length,
		toString : toString,
		clear : clear,
		insertAfter : insertAfter,
		find : find
	};
})();

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
console.log2('List.toString()			',names.toString());
console.log2('List.find("Raymond")			',names.find("Raymond"));
console.log2('List.insertAfter("Manish Jain",2)			',names.insertAfter("Manish Jain",2));

console.log2('List.toString()			',names.toString(),'\n');

console.log2('List.remove("Bryan")			',names.remove("Bryan"));

console.log2('List.toString()			',names.toString(),'\n');