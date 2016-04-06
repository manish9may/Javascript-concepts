var Stack = function(){
	this.dataStore = [];
	this.top = 0;
}

Stack.prototype.push = function(element){
	this.dataStore[this.top++] = element;
}

Stack.prototype.pop = function(){
	if(this.top === 0){
		return;
	}
	return this.dataStore.splice(--this.top,1)
}
Stack.prototype.peek = function(){
	if(this.top === 0){
		return;
	}
	return this.dataStore[this.top - 1];
}
Stack.prototype.length = function(){
	return this.top;
}
Stack.prototype.clear = function(){
	delete this.dataStore;
	this.dataStore = [];
	this.top = 0;
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());
console.log("\n####### convertBase ######\n");
var convertBase = function(num,base){
	var s = new Stack();
	do{
		s.push(num % base);
		num = Math.floor(num /= base);
	}while(num > 0)
	var returnNum = '';
	while(s.length()){
		returnNum += s.pop();
	}
	return returnNum;
}

var returnNum = convertBase(4,2);
console.log(returnNum)
console.log("\n####### isPalindrome ######\n");
var isPalindrome = function(words){
	var s = new Stack();
	var tmpWords = words.toString();
	for(var wordIndex = 0 ,len = tmpWords.length; wordIndex < len; ++wordIndex){
		s.push(tmpWords[wordIndex]);
	}
	var returnNum = '';
	while(s.length()){
		returnNum += s.pop();
	}
	return returnNum == words;
}

var returnNum = isPalindrome(121);
console.log(returnNum)