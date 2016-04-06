var List = function(){
	this.dataStore = [];
	this.listSize = 0;
	this.pos = 0;
}

List.prototype.append = function(element){
	this.dataStore[this.listSize++] = element;
}
List.prototype.find = function(element){
	for(var itemIndex = 0,len = this.listSize;itemIndex < len ; ++itemIndex){
		if(this.dataStore[itemIndex] === element){
			return itemIndex;
		}
	}
	return -1;
}
List.prototype.remove = function(element){
	var itemIndex = this.find(element);
	if(itemIndex > -1){
		this.dataStore.splice(itemIndex,1);
		this.listSize --;
		return true;
	}
	return false;
}
List.prototype.length = function(){
	return this.listSize;
}
List.prototype.toString = function(){
	return this.dataStore.toString();
}

List.prototype.clear = function(){
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = 0;
	this.pos = 0;
}
List.prototype.insertAfter = function(element,afterElement){
	var itemIndex = this.find(afterElement);
	if(itemIndex > -1){
		this.dataStore.splice(itemIndex + 1,0,element);
		this.listSize ++;
		return true;
	}
	return false;
}

List.prototype.contains = function(element){
	var itemIndex = find(element);
	if(itemIndex > -1){
		return true;
	}
	return false;
}
List.prototype.front = function(){
	this.pos = 0;
}
List.prototype.end = function(){
	this.pos = this.listSize - 1;
}
List.prototype.prev = function(){
	if(this.pos > 0){
		--this.pos;
	}
}
List.prototype.next = function(){
	if(this.pos <= this.listSize - 1){
		++ this.pos;
	}
}
List.prototype.currentPos = function(){
	return this.pos;
}
List.prototype.moveToPos = function(position){
	this.pos = position;
}
List.prototype.getElement = function(){
	return this.dataStore[this.pos];
}


var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
console.log(names.getElement());
names.next();
console.log(names.getElement());

names.next();
names.next();
names.prev();
console.log(names.getElement());
console.log("####################################")
for(names.front();names.currentPos() < names.length();names.next()){
	console.log(names.getElement())
}