var aBook = function(){
	this.sIsbn = '12345';
	this.title = 'test';
	this.author = 'author';
	
};
aBook.prototype = {
	getIsbn  : function(){
			return this.sIsbn;
	},
	getTitle : function(){
			return this.title;
	},
	getAuthor : function(){
			return this.author;
	}
}
var PublicLibraryProxy = require("./PublicLibraryProxy.js");
var book = new aBook();
var oProxyLibrary = new PublicLibraryProxy([book]);
oProxyLibrary.findBooks('test');