/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let perv = -Infinity
    const dfs = (root) => {
        if (!root) {
            return true
        }

        let left = dfs(root.left)
        if (perv >= root.val) {
            return false
        }
        perv = root.val
        let right = dfs(root.right)
        return left && right
    }
    return dfs(root)
};
// @lc code=end

