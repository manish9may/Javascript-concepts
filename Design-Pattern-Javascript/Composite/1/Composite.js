var Node = function(name){
	this.item = [];
	this.name = name;
}
Node.prototype = {
	add : function(element){
		this.item.push(element);
	},
	remove : function(element){
		var len = this.item.length;
		for(var i = 0 ; i < len ; i++){
			if(this.item[i] === element){
				this.item.splice(i,1);
				return true;
			}
		}
		return false;
	},
	getItem : function(index){
		return this.item[index];
	},
	hasItem : function(){
		return this.item.length > 0;
	}
}
var Traverse = function(indent,node){
	console.log(Array(indent ++).join('--') + node.name);
	for(var i = 0,len = node.item.length;i < len; i++){
		Traverse(indent,node.getItem(i))
	}
}
var tree = new Node("root");
    var left = new Node("left")
    var right = new Node("right");
    var leftleft = new Node("leftleft");
    var leftright = new Node("leftright");
    var rightleft = new Node("rightleft");
    var rightright = new Node("rightright");
 
    tree.add(left);
    tree.add(right);
    tree.remove(right);  // note: remove
    tree.add(right);
 
    left.add(leftleft);
    left.add(leftright);
 
    right.add(rightleft);
    right.add(rightright);

    Traverse(1, tree)