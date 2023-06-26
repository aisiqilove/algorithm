/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    // if (root === null) {
    //     return root
    // }
    // let queue = [root]
    // while (queue.length != 0) {
    //     let len = queue.length
    //     for (let i = 0; i < len; i++) {
    //         let node = queue.shift()
    //         if (len - 1 !== i) {
    //             node.next = queue[0]
    //         }
    //         node.left && queue.push(node.left)
    //         node.right && queue.push(node.right)
    //     }
    // }
    // return root

    let res = []
    if (root === null) {
        return root
    }
    let queue = [root]
    while (queue.length != 0) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (len - 1 !== i) {
                node.next = queue[0]
                //     res.push(node.val)
                // } else {
                //     res.push(node.val)
                //     res.push('#')
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    console.log(res)
    return root
};
// @lc code=end

