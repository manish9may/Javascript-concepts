var Toy = function(){
	this.$name = '';
	this.$price = 0.0;
	this.prepare = function(){
		console.log(this.$name + ' is Prepared');
	}
	this.package = function(){
		console.log(this.$name + ' is Packaged');
	}
	this.label = function(){
		console.log(this.$name + ' is Labeled');	
	}
}

module.exports = Toy;