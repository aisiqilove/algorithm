/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    // if(!head || !head.next) return head
    // let next = head.next
    // head.next = swapPairs(next.next)
    // next.next = head
    // return next

    // let rest = head.next.next;
    // let newHead = head.next;
    // newHead.next = head;
    // head.next = swapPairs(rest);
    // return newHead;

    let per = {
        next: head
    }
    let temp = per
    while (temp.next && temp.next.next) {
        let start = temp.next
        let end = temp.next.next
        temp.next = end
        start.next = end.next
        end.next = start
        temp = start
    }
    return per.next

};
// @lc code=end

