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
var deleteDuplicates = function(head) 
{
    if(!head)
        return head;
    var cur=head;
    while(cur.next != null)
    {
        var nextnode=cur.next;
        console.log('cur ' +cur.val);
        console.log('nextnode ' +nextnode.val);
        if(cur.val == nextnode.val)
        {
             cur.next=cur.next.next;
        }
        else
        {
            cur=cur.next;
        } 
    }
    return head;
};