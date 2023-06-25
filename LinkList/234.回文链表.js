/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = fast = head
    let perv
    while(fast&&fast.next) {
        fast = fast.next.next
        let next = slow.next
        slow.next = perv
        perv = slow
        slow = next
    }
    // slow 在中间 奇数
    if(fast) {
        slow = slow.next
    }
    while(perv && slow) {
        if(perv.val != slow.val) {
            return false
        }
        slow = slow.next
        perv = perv.next
    }
    return true
};
// @lc code=end

