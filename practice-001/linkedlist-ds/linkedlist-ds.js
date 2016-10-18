var Node = function($data){
	this.data = $data;
	this.next = null;
}

var LinkedList = function(){
	this.head = null;
}
LinkedList.prototype = {
	add : function($data){
		if(typeof $data === 'undefined' || $data === null){
			throw new Error('Invalid Input!');
		}else if(this.head === null){
			this.head = new Node($data)
		}else{
			var currNode = this.head;
			while(currNode.next){
				currNode = currNode.next;
			}
			currNode.next = new Node($data);
		}
	},
	find : function($data){
		if(typeof $data === 'undefined' || $data === null){
			throw new Error('Invalid Input!');
		}else if(this.head === null){
			throw new Error('Empty Linked List!');
		}else{
			var currNode = this.head;
			while(currNode){
				if(currNode.data === $data){
					return true;
				}
				currNode = currNode.next;
			}
			return false;
		}
	},
	remove : function($data){
		if(typeof $data === 'undefined' || $data === null){
			throw new Error('Invalid Input!');
		}else if(this.head === null){
			throw new Error('Empty Linked List!');
		}else{
			var currNode = this.head,prvNode = null;
			while(currNode){
				if(currNode.data === $data && currNode === this.head){
					this.head = this.head.next;
					return true;
				}else if(currNode.data === $data && currNode !== this.head){
					prvNode.next = currNode.next;
					return true;
				}
				prvNode = currNode;
				currNode = currNode.next;
			}
			return false;
		}
	},
	removeAt : function($position){
		if(typeof $position === 'undefined' || $position === null || isNaN($position) || parseInt($position,10) < 1){
			throw new Error('Invalid Position!');
		}else if(this.head === null){
			throw new Error('Empty Linked List!');
		}else if(parseInt($position,10) === 1){
			this.head = this.head.next;
			return true;
		}else{
			var currNode = this.head,prvNode = null;
			while(currNode && $position > 0){
				if($position === 1){
					prvNode.next = currNode.next;
					return true;	
				}
				prvNode = currNode;
				currNode = currNode.next;
				$position--;
			}
			return false;
		}
	},
	reverse : function(){
		var p1 = this.head,p2,p3;
		if(this.head === null){
			throw new Error('Empty Linked List!');
		}else if(this.head.next === null){
			throw new Error('Single element Linked List!')
		}else{
			while(p1){
				p2 = p1.next;
				p1.next = p3;
				p3 = p1;
				p1 = p2;
			}
			this.head = p3;
			return this;
		}
	},
	isPalindrome : function(){
		if(this.head === null){
			throw new Error('Empty Linked List!');
		}else if(this.head.next === null){
			throw new Error('Single element Linked List!')
		}else{
			var copyRLinkedList = this.reverse.call(Object.create(this)),currNode1 = this.head,currNode2 = copyRLinkedList.head;
			while(currNode1 && currNode2){
				if(currNode1.data !== currNode2.data){
					return false;
				}
				currNode1 = currNode1.next;
				currNode2 = currNode2.next;
			}
			return true;
		}
	},
	getLen : function(currNode){
		var $length = 0;
		while(currNode){
			$length++;
			currNode = currNode.next;
		}
		return $length;
	},
	oddEvenList : function(head){
		if(this.head === null){
			throw new Error('Empty Linked List!');
		}else if(this.head.next === null){
			throw new Error('Single element Linked List!')
		}else{
			var oddNode = head,evenNode = head.next,currNode = evenNode;
			while(evenNode && evenNode.next){
				oddNode.next = evenNode.next;
				evenNode.next = evenNode.next.next;
				oddNode = oddNode.next;
				evenNode = evenNode.next;
			}
			oddNode.next = currNode;
		}
		return head;
	},
	getIntersectionNode : function(headA,headB){
		var $lengthA = this.getLen(headA),$lengthB = this.getLen(headB),$diff = 0;
		if($lengthA > $lengthB){
			$diff = $lengthA - $lengthB;
			while($diff > 0 ){
				headA = headA.next;
				$diff--;
			}
		}else if($lengthB > $lengthA){
			$diff = $lengthB - $lengthA;
			while($diff > 0 ){
				headB = headB.next;
				$diff--;
			}
		}
		while(headA && headB){
			if(headA.data === headB.data){
				return true;
			}
			headB = headB.next;
			headA = headA.next;
		}
		return false;
	}

}
console.log2('######### Linked List #######')
var linkedList = new LinkedList(),linkedList2 = new LinkedList(),linkedList3 = new LinkedList();
linkedList.add('2')
linkedList.add('3')
linkedList.add('4')
linkedList.add('5')
linkedList.add('10')
linkedList.add('12')

linkedList2.add('9')
linkedList2.add('8')
linkedList2.add('7')
linkedList2.add('13')
linkedList2.add('4')
linkedList2.add('5')
linkedList2.add('10')
linkedList2.add('12');

linkedList3.add(1);
linkedList3.add(2);
linkedList3.add(3);
linkedList3.add(4);
linkedList3.add(5);

console.log2('linkedList   		',linkedList);
console.log2('linkedList.find("2")   		',linkedList.find("2"));
//console.log('linkedList.remove("5")   		',linkedList.remove("5"));
//console.log('linkedList.remove("6")   		',linkedList.remove("6"));

//console.log('linkedList.reverse()   		',linkedList.reverse());
//console.log('linkedList.isPalindrome()   		',linkedList.isPalindrome());
//console.log('linkedList.getLen()   		',linkedList.getLen(linkedList.head));
//console.log('linkedList.getIntersectionNode()   		',linkedList.getIntersectionNode(linkedList.head,linkedList2.head));
console.log2('linkedList.oddEvenList()   		',linkedList.oddEvenList(linkedList3.head));