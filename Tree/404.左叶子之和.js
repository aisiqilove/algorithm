/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
    let sum = 0;
    const dfs = (root) => {
        if (!root) {
            return
        }
        // left 是单独子节点
        if (root.left && !root.left.left && !root.left.right) {
            sum += root.left.val
        }
        // left 有嵌套走递归
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return sum
};
// @lc code=end

