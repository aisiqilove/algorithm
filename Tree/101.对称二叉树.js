/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {

    const isSameTree = (l, r) => {
        if (l === null && r === null) {
            return true
        }
        if (l === null || r === null) {
            return false
        }
        if (l.val === r.val) {
            return isSameTree(l.left, r.right) && isSameTree(l.right, r.left)
        }
        return false
    }
    return isSameTree(root.left, root.right)
};
// @lc code=end

