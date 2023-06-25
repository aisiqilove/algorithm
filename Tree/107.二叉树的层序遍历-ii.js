/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    let res = []
    if (root === null) {
        return res
    }
    let queue = []
    queue.push(root)
    while (queue.length !== 0) {
        let len = queue.length
        let list = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            list.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.unshift(list)
    }
    return res
};
// @lc code=end

