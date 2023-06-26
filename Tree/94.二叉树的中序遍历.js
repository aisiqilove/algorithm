/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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

var inorderTraversal = function (root) {
    // let arr = []
    // function dfs(root) {
    //     if (!root) {
    //         return
    //     }
    //     dfs(root.left)
    //     arr.push(root.val)
    //     dfs(root.right)
    // }
    // dfs(root)
    // return arr

    let res = []
    let stack = []
    while (stack.length || root) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        let node = stack.pop()
        res.push(node.val)
        root = node.right
    }
    return res
};
// @lc code=end

