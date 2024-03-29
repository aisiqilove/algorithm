/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // 1=>2=>3=>4
    // 5=>3=>4
    // 1=>2=>3=>4=>5=>3=>4 合并在一起，判断环
    let curA = headA
    let curB = headB
    while (curA !== curB) {
        curA = curA === null ? headB : curA.next
        curB = curB === null ? headA : curB.next
    }
    return curA
};
// @lc code=end

