/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // let index = 0
    // let sentry = {
    //     next: head
    // }
    // let p = sentry
    // let s = sentry
    // while(p.next) {
    //     p = p.next
    //     index++
    // }
    // let cur = index - n
    // let cIndex = 0
    // while(s && s.next) {
    //     if(cur === cIndex) {
    //         s.next = s.next.next
    //     }
    //     s = s.next
    //     cIndex++
    // }
    // return sentry.next

    // 双指针
    let sentry = {
        next: head
    }
    let slow = fast = sentry

    while (n--) {
        fast = fast.next
    }
    while (fast.next !== null) {
        fast = fast.next
        slow = slow.next
    }
    slow.next=slow.next.next
    return sentry.next

};
// @lc code=end

