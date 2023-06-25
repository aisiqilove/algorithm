/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
    // 每一层最右边的一个值
    let res = []
    if (root === null) {
        return res
    }
    let queue = [root]
    while (queue.length !== 0) {
        let len = queue.length
        let list = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            list.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(list[list.length - 1])
    }
    return res
};
// @lc code=end

