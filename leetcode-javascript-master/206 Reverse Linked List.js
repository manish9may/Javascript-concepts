// Leetcode #206
// Language: Javascript
// Problem: https://leetcode.com/problems/reverse-linked-list/
// Author: Chihung Yu
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null){
        return head;
    }
    
    var cur = head;
    var pre = null;

    while(cur){
        var post = cur.next;
        cur.next = pre;
        pre = cur;
        cur = post;
    }
    
    return pre;
};