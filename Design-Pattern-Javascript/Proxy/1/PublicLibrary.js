var PublicLibrary = function(aBooks){
	this.oCatalog = {};
	this.setCatalogFromBooks(aBooks);
}

PublicLibrary.prototype.setCatalogFromBooks = function(aBooks){
	for (var i = 0; i < aBooks.length; i++) {
		this.oCatalog[aBooks[i].getIsbn()] = {
			book : aBooks[i],
			available : true
		}
	}
}

PublicLibrary.prototype.findBooks = function(sQueryString){
	console.log("Enter findBooks PublicLibrary");
	var oBook = null , aResults = [];
	for(var sIsbn in this.oCatalog){
		if(!this.oCatalog.hasOwnProperty(sIsbn)){
			continue;
		}
		oBook = this.oCatalog[sIsbn].book;
		if(sQueryString.match(oBook.getTitle()) || sQueryString.match(oBook.getAuthor())){
			aResults.push(oBook);
		}
	}
	return aResults;
}

PublicLibrary.prototype.checkoutbook = function(oBookItem){
	var sIsbn = oBookItem.getIsbn();
	var oBook = this.oCatalog[sIsbn];
	if(oBook){
		if(oBook.available){
			oBook.available = false;
			return oBook;
		}else{
			throw new Error('PublicLibrary: book ' + oBookItem.getTitle() + ' is not currently available.');
		}
	}else{
			throw new Error('PublicLibrary: book ' + oBookItem.getTitle() + ' not found.');
	    }
}

PublicLibrary.prototype.returnBook = function(oBookItem){
	var sIsbn = oBook.getIsbn();
	var oBook = this.oCatalog[sIsbn];
	if(oBook)
	{
		oBook.available = true;
	}
	else
	{
		throw new Error('PublicLibrary: book ' + oBookItem.getTitle() + ' not found.');
	}
}
module.exports = PublicLibrary;