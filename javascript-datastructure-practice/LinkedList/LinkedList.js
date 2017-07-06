const Node = function(data){
	this.data = data;
	this.next = null;
}

const LinkedList = function(){
	this.head = null;
}

LinkedList.prototype = (function(){
	let add = function(data){
		let currentNode = this.head;
		if(!currentNode){
			this.head = new Node(data);
		}else{
			while(currentNode.next){
				currentNode = currentNode.next; 
			}
			currentNode.next = new Node(data);
		}
	}
	let remove = function(data){
		if(this.head){
			let currentNode = this.head,prevNode;
			if(currentNode.data === data){
				this.head = this.head.next;
			}else{
				while(currentNode.next){
					if(currentNode.data === data){
						break;
					}
					prevNode = currentNode;
					currentNode = currentNode.next
				}
				prevNode.next = currentNode.next;
			}
		}
	}
	let reverse = function(){
		let nextNode,prevNode,currentNode = this.head;
		while(currentNode){
			nextNode = currentNode.next;
			currentNode.next = prevNode;
			prevNode = currentNode;
			currentNode = nextNode;
		}
		this.head = prevNode;
	}
	let isPalindrome = function(){
		if(!this.head || !this.head.next){
			false;
		}else{
			let temp = JSON.stringify(this); // Serialize L1, remember this can be an expensive operation
	  		let L2 = JSON.parse(temp); // Deserialize L1, remember this can be an expensive operation
	  		this.reverse.call(L2);
	  		let head1 = this.head,head2 = L2.head;
	  		while(head1 && head2){
	  			if(head1.data !== head2.data){
	  				return false
	  			}
	  			head1 = head1.next;
	  			head2 = head2.next;
	  		}
		}
		return true;
	}
	let getLen = function(){
		let depth = 0,currentNode = this.head;
		while(currentNode){
			depth++;
			currentNode = currentNode.next
		}
		return depth;
	}
	let oddEvenList = function(){
		let oddHead = null,evenHead = null,oddLast = null,evenLast = null,currentNode = this.head;

		while(currentNode){
			if(currentNode.data % 2 == 0){
				if(!evenHead){
					evenHead = evenLast = currentNode
				}else{
					evenLast.next = currentNode;
					evenLast = currentNode;
				}
			}else{
				if(!oddHead){
					oddHead = oddLast = currentNode
				}else{
					oddLast.next = currentNode
					oddLast = currentNode;
				}
			}
			currentNode = currentNode.next;
		}
		
		if(oddLast){
			oddLast.next = null;
		}else if(evenLast){
			evenLast.next = null;
		}

		if(evenHead){
			evenLast.next = oddHead;
			this.head = evenHead;
		}else{
			this.head = oddHead;
		}
		
	}
	let getIntersectionNode = function(headA,headB){
		let addA = [],addB = [],result = null;
		while(headA){
			addA.unshift(headA.data);
			headA = headA.next;
		}
		while(headB){
			addB.unshift(headB.data);
			headB = headB.next;
		}
		 if(addA.length > addB.length){
		 	for(let i = 0 ; i < addB.length;i++){
		 		let refA = addA[i],refB = addB[i];
		 		if(refA == refB){
		 			result = refB[i];
		 		}else{
		 			break;
		 		}
		 	}
		 }else if(addA.length < addB.length){
		 	for(let i = 0 ; i < addA.length;i++){
		 		let refA = addA[i],refB = addB[i];
		 		if(refA == refB){
		 			result = addA[i];
		 		}else{
		 			break;
		 		}
		 	}
		 }
		return result;
	}
	let getMidNode = function(){
		let slowNode = this.head,fastNode = this.head;
		while(fastNode.next){
			slowNode = slowNode.next;
			fastNode = fastNode.next.next;
		}
		return slowNode.data
	} 
	let removeAt = function(position){
		
		if(position === 1){
			this.head = this.head.next;
		}else{
			let currentNode = this.head,prevNode;
			while(currentNode){
			if(position === 1){
				break;
			}
			prevNode = currentNode;
			currentNode = currentNode.next;
			position--;
		}
		prevNode.next = currentNode.next;	
		}
		
	}
	let sortedInsert = function(data){
		let currentNode = this.head,prevNode;
		let node = new Node(data);
		if(data < this.head.data){
			node.next = this.head;
			this.head = node;
		}else{
			while(currentNode){
				if(data < currentNode.data){
					break;
				}
				prevNode = currentNode;
				currentNode = currentNode.next;
			}
			prevNode.next = node;
			node.next = currentNode;
		}
		
	}
	let removeDuplicates = function(){
		let currentNode = this.head,prevNode,hashMap = {};
		while(currentNode){
			if(!hashMap[currentNode.data]){
				hashMap[currentNode.data] = 1;
			}else{
				prevNode.next = currentNode.next;
			}
			prevNode = currentNode;
			currentNode = currentNode.next;
		}
	}
	let rotate = function(rNode){
		var currentNode = this.head,new_head,nextNode;
		while(currentNode){
			if(currentNode.data === rNode){
				break;
			}
			currentNode = currentNode.next;
		}
		new_head = currentNode.next;
		currentNode.next = null;
		nextNode = new_head;
		while(nextNode.next){
			nextNode = nextNode.next;
		}
		nextNode.next = this.head;
		this.head = null;
		this.head = new_head;
	}
	return {
		add : add,
		remove : remove,
		reverse : reverse,
		isPalindrome : isPalindrome,
		getLen : getLen,
		oddEvenList : oddEvenList,
		getIntersectionNode : getIntersectionNode,
		getMidNode : getMidNode,
		removeAt : removeAt,
		sortedInsert : sortedInsert,
		removeDuplicates : removeDuplicates,
		rotate : rotate
	}
})();


let linkedList = new LinkedList(),linkedList2 = new LinkedList(),linkedList3 = new LinkedList(),
linkedList4 = new LinkedList(),linkedList5 = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
//linkedList.remove(4);
//linkedList.reverse()

linkedList.removeAt(4)
console.log(linkedList);


linkedList2.add(7);
linkedList2.add(8);
linkedList2.add(9);
linkedList2.add(3);
linkedList2.add(4);

console.log(linkedList2.getMidNode())
console.log(linkedList2.getIntersectionNode(linkedList.head,linkedList2.head))

console.log(linkedList2.isPalindrome())

console.log(linkedList2.getLen());

linkedList3.add(2);
linkedList3.add(9);
linkedList3.add(6);
linkedList3.add(8);

linkedList3.oddEvenList();

console.log(linkedList3)


linkedList4.add(2);
linkedList4.add(5);
linkedList4.add(7);
linkedList4.add(10);
linkedList4.add(15);


linkedList4.sortedInsert(16);

console.log(linkedList4);


linkedList5.add(1);
linkedList5.add(3);
linkedList5.add(2);
linkedList5.add(3);
linkedList5.add(5);
linkedList5.add(4);
linkedList5.add(5);

linkedList5.removeDuplicates();

console.log(linkedList5)


linkedList5.rotate(2)

console.log(linkedList5)