var Node = function($element){
	this.next = null;
	this.data = $element;
}
var LinkedList = function(){
	this.head = null;
}
LinkedList.prototype = {
	add : function($element){
		if(!$element){
			throw new Error('Invlaid data!')
		}
		var node = new Node($element);
		if(!this.head){
			this.head = node;
		}else{
			var currentNode = this.head;
			while(currentNode.next){
				currentNode = currentNode.next;
			}
			currentNode.next = node;
		}
	},
	remove : function($element){
		if(!$element){
			throw new Error('Invlaid data!')
		}else if(!this.head){
			throw new Error('Empty Linked List!')
		}else{
			var currentNode = this.head,prevNode = this.head;
			if(currentNode.data === $element){
				this.head = this.head.next;
				return;
			}
			while(currentNode){
				if(currentNode.data === $element){
					prevNode.next = currentNode.next;
					return;
				}
				prevNode = currentNode;
				currentNode = currentNode.next;
			}
		}
	},
	removeAt : function($position){
		if(isNaN($position)){
			throw new Error('Invalid Position!')
		}else if(parseInt($position,10) <= 0){
			throw new Error('Invalid Position!')
		}else if(!this.head){
			throw new Error('Empty Linked List!');
		}else if(parseInt($position,10) == 1){
			this.head = this.head.next;
			return;
		}else{
			var currentNode = this.head,prevNode = this.head,index = 1;
			while(currentNode){
				if(index === parseInt($position,10)){
					prevNode.next = currentNode.next;
					return;
				}
				prevNode = currentNode;
				currentNode = currentNode.next;
				index++;
			}
		}
	},
	reverse : function(){
		if(!this.head){
			throw new Error('Empty Linked List!')
		}else if(!this.head.next){
			throw new Error('Single element Linked List!')
		}else{
			var p1 = this.head, p2 = null, p3 = null;
			while(p1){
				// save next node
				p2 = p1.next;
				// reverse the pointer
				p1.next = p3
				p3 = p1;
				p1 = p2;
			}
			this.head = p3;
		}
	},
	oddEvenList : function(head){
		if(head === null) {
        	return null;
    	}
	    var odd = head;
	    var even = head.next;
	    var connectNode = head.next;
	    while(odd && odd.next && odd.next.next) {
	        odd.next = even.next;
	        odd = odd.next;
	        if(odd) {
	            even.next = odd.next;
	            even = even.next;
	        }
	    }
	    odd.next = connectNode;
	    return head;
	},
	isPalindrome : function(){
		if(!this.head || !this.head.next){
			throw new Error('No duplicates were found. Empty or a single element Linked List.');
		}
		var temp = JSON.stringify(this); // Serialize L1, remember this can be an expensive operation
  		var L2 = JSON.parse(temp); // Deserialize L1, remember this can be an expensive operation
  		this.reverse.call(L2)
  		var head1 = L2.head;
  		var head2 = this.head;
  		while(head2){
  			if(head2.data !== head1.data){
  				return false;
  			}
  			head1 = head1.next;
  			head2 = head2.next;
  		}
  		return true;
	},
	getLen : function(currentNode){
		var len = 0;
		while(currentNode){
			currentNode = currentNode.next;
			len++;
		}
		return len;
	},
	getIntersectionNode : function(headA,headB){
		var lenA = this.getLen(headA);
		var lenB = this.getLen(headB);
	    while(lenA > lenB){
	    	headA = headA.next;
	    	lenA--;
	    }
	    while(lenB > lenA){
	    	headB = headB.next;
	    	lenB--;
	    }
	    while(headB && headA){
	    	if(headA.data ===  headB.data){
	    		return headA;
	    	}
	    	headA = headA.next;
	    	headB = headB.next;
	    }
	    return null;
	}
}

var linkedList = new LinkedList(),linkedList2 = new LinkedList();
linkedList.add('1')
linkedList.add('2')
linkedList.add('3')
linkedList.add('4')
linkedList.add('5')


linkedList2.add('9')
linkedList2.add('8')
linkedList2.add('7')
linkedList2.add('4')
linkedList2.add('6')

console.log(linkedList.getIntersectionNode(linkedList.head,linkedList2.head))