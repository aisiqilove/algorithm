/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function(root) {
    let res = []
    if(root === null) {
        return res
    }
    let queue = [root]
    while(queue.length) {
        let len = queue.length
        let sum = 0
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            sum += node.val
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(sum/len)
        // res.push((sum/len).toFixed(5))
    }
    return res
};
// @lc code=end

