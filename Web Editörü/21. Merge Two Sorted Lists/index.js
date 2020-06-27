/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
var mergeTwoLists = function(l1, l2) {
    let resultNodeList = new ListNode(0);
    let currentNodeList = resultNodeList; 

    while(l1 !== null && l2 !== null){

        if(l1.val < l2.val){
            currentNodeList.next = l1;
            l1 = l1.next
        } else {
            currentNodeList.next = l2
            l2 = l2.next
        }

        currentNodeList = currentNodeList.next
    }

    if(l1 !== null) 
        currentNodeList.next = l1;
    else if (l2 !== null) 
        currentNodeList.next = l2
    

    return resultNodeList.next
};