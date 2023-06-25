/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    // if(!root) {
    //     return 0
    // }
    // if(!root.left && !root.right) {
    //     return 1
    // }
    // let depth = Infinity
    // if(root.left !== null) {
    //     depth = Math.min(minDepth(root.left), depth)
    // }
    // if(root.right !== null) {
    //     depth = Math.min(minDepth(root.right), depth)
    // }
    // return depth + 1

    if (!root) {
        return 0
    }
    let queue = []
    queue.push(root)
    let depth = 1;
    while (queue.length != 0) {
        let len = queue.length
        for (let index = 0; index < len; index++) {
            let current = queue.shift();
            if (current.left == null && current.right == null) {
                return depth;
            }
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        depth++
    }
    return 0
};
// @lc code=end

