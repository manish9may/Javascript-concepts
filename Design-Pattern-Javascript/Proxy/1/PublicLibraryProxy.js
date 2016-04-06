var PublicLibrary = require("./PublicLibrary.js")
var PublicLibraryProxy = function(aCatalog){
	this.oLibrary = new PublicLibrary(aCatalog);
}
PublicLibraryProxy.prototype.findBooks = function(sQueryString){
	console.log("Enter findBooks PublicLibraryProxy");
	return this.oLibrary.findBooks(sQueryString);
}
PublicLibraryProxy.prototype.checkoutbook = function(aBookitem){
	return this.oLibrary.checkoutbook(aBookitem);
}
PublicLibraryProxy.prototype.returnBook = function(aBookitem){
	return this.oLibrary.returnBook(aBookitem);
}

module.exports = PublicLibraryProxy;