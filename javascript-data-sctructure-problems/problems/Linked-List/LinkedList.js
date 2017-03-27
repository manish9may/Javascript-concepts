const Node = function($data){
	this.next = null;
	this.data = $data;
}
let LinkedList = function(){
	this.head = null;
}

LinkedList.prototype = (function(){
	let add = function($data){
		if(typeof $data === 'undefined' || $data === null){
			throw new Error('Invalid Input data!');
		}else if(this.head == null){
			this.head =  new Node($data)
		}else{
			var currNode = this.head;
			while(currNode.next){
				currNode = currNode.next;
			}
			currNode.next = new Node($data);
		}
	}
	let remove = function($data){
		if(typeof $data === 'undefined' || $data === null){
			throw new Error('Invalid Input data!');
		}else if(this.head === null){
			throw new Error('Empty Linked List!');
		}else if(this.head.data === $data){
			this.head = this.head.next;
			return true;
		}else{
			var currNode = this.head.next,prevNode = null;
			while(currNode){
				if(currNode.data === $data){
					prevNode.next = currNode.next;
					return true;
				}
				prevNode = currNode;
				currNode = currNode.next;
			}

		}
		return false;
	}
	let removeAt = function($position){
		if(typeof $position === 'undefined' || $position === null || isNaN($position) || $position < 1){
			throw new Error('Invalid Position!');
		}else if(this.head === null){
			throw new Error('Empty Linked List!');
		}else if(Number($position) === 1){
			this.head = this.head.next;
			return true;
		}else{
			var currNode = this.head.next,prevNode = null,$position = Number($position) - 1;
			while(currNode){
				if(Number($position) === 1){
					prevNode.next = currNode.next;
					return true;
				}
				prevNode = currNode;
				currNode = currNode.next;
				$position = Number($position) - 1;
			}
		}
		return false;
	}
	let reverse = function(){
		var p1 = this.head,p2,p3;
		while(p1){
			p2 = p1.next;
			p1.next = p3;
			p3 = p1;
			p1 = p2;
		}
		this.head = p3;
	}
	let getCount = function(){
		if(this.head === null){
			return 0;
		}else{
			var currNode = this.head,len = 0;
			while(currNode){
				len = len + 1;
				currNode = currNode.next;
			}
			return len;
		}
		return 0;
	}
	let searchNode = function($data){
		if(typeof $data === 'undefined' || $data === null){
			throw new Error('Invalid Position!');
		}else if(this.head === null){
			throw new Error('Empty Linked List!');
		}else if(this.head.data === $data){
			return true;
		}else{
			var currNode = this.head.next;
			while(currNode){
				if(currNode.data === $data){
					return true;
				}
				currNode = currNode.next;
			}
		}
		return false;
	}
	let swapNode = function(x,y){
		if(this.head === null || this.head.next == null){
			throw new Error('Invalid Operation!');
		}else if(x === y){
			return false;
		}else{
			var currNodeX = this.head,prevNodeX = null,currNodeY = this.head,prevNodeY = null;
			while(currNodeX){
				if(currNodeX.data === x){
					break;
				}
				prevNodeX = currNodeX;
				currNodeX = currNodeX.next;
			}
			while(currNodeY){
				if(currNodeY.data === y){
					break;
				}
				prevNodeY = currNodeY;
				currNodeY = currNodeY.next;
			}
			if(currNodeX == null || currNodeY == null){
				throw new Error('One of input is Invalid');
			}else{
				if(prevNodeX === null){
					this.head = currNodeY;
				}else{
				   prevNodeX.next = currNodeY
				}

				if(prevNodeY === null){
					this.head = currNodeX;
				}else{
					prevNodeY.next = currNodeX;
				}
				let temp = currNodeX.next;
				currNodeX.next = currNodeY.next;
				currNodeY.next = temp;
			}
		}
	}
	let middleNode = function(){
		if(this.head === null){
			throw new Error('Invalid Operation!');
		}else if(this.head !== null && this.head.next === null){
			return this.head.data;
		}else{
			var fastCurrNode = this.head,slowCurrNode = this.head;
			while(fastCurrNode && fastCurrNode.next){
				fastCurrNode = fastCurrNode.next.next;
				slowCurrNode = slowCurrNode.next;
			}
			return slowCurrNode.data;
		}
		return;
	}
	let detectLoop = function(){
		if(this.head === null){
			throw new Error('Invalid Operation!');
		}else{
			var fastCurrNode = this.head,slowCurrNode = this.head;
			while(fastCurrNode && fastCurrNode.next){
				fastCurrNode = fastCurrNode.next.next;
				slowCurrNode = slowCurrNode.next;
				if(fastCurrNode.data == slowCurrNode.data){
					return true;
				}
			}
			return false;
		}
		return false;
	}
	let addSortedNode = function($data){
		if(typeof $data === 'undefined' || $data === null){
			throw new Error('Invalid Input data!');
		}else if(this.head == null){
			this.head =  new Node($data)
		}else if(this.head.data > $data){
			let tmp = new Node($data);
			tmp.next = this.head;
			this.head = tmp;
		}else{
			var currNode = this.head,prevNode = null;
			while(currNode){
				if(currNode.data > $data){
					break;
				}
				prevNode = currNode;
				currNode = currNode.next;
			}
			let tmp = new Node($data);
			prevNode.next = tmp;
			tmp.next = currNode;
		}
	}
	let mergeSortedList = function(headA,headB){
		let linkedList = new LinkedList();
		if(headA === null || headB === null){
			return null;
		}else if(headA === null){
			return headB;
		}else if(headB === null){
			return headA;
		}else{
			while(headA && headB){
				if(headA.data < headB.data){
					linkedList.add(headA.data);
					headA = headA.next;
				}else{
					linkedList.add(headB.data);
					headB = headB.next;
				}
			}
			if(headA){
				while(headA){
					linkedList.add(headA.data);
					headA = headA.next;
				}
			}if(headB){
				while(headB){
					linkedList.add(headB.data);
					headB = headB.next;
				}
			}
		}
		return linkedList;
	}
	let isPalindrome = function(){
		if(this.head === null){
			throw new Error('Empty Linked List!');
		}else if(this.head.next === null){
			return true
		}else{
			var l2 = ;
		}
		return false;
	}
	return {
		add : add,
		remove : remove,
		removeAt : removeAt,
		reverse : reverse,
		getCount : getCount,
		searchNode : searchNode,
		swapNode : swapNode,
		middleNode : middleNode,
		detectLoop : detectLoop,
		mergeSortedList : mergeSortedList,
		addSortedNode : addSortedNode,
		isPalindrome : isPalindrome
	};
})();

let linkedList = new LinkedList(),linkedList2 = new LinkedList();


linkedList.add('1')
linkedList.add('2')
linkedList.add('3')
linkedList.add('4')
linkedList.add('7');
//linkedList.head.next.next.next.next.next = linkedList.head.next;
linkedList2.add('6')
linkedList2.add('7')
linkedList2.add('8')
linkedList2.add('9')
linkedList2.add('10');

try{
	//linkedList.swapNode('2','5');
	//linkedList.addSortedNode('5');
	linkedList.isPalindrome()
	console.logger('LinkedList 1    ',linkedList);
}catch(Error){
	console.logger('Error			',Error.message)
}
