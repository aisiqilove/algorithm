/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    // if(!root) {
    //     return null
    // }
    // let stack = [root]
    // while(stack.length) {
    //     let len = stack.length
    //     for (let i = 0; i < len; i++) {
    //         let node = stack.pop()
    //         if(node.val === val) {
    //             return node
    //         }
    //         node.left && stack.push(node.left)
    //         node.right && stack.push(node.right)
    //     }
    // }
    // return null
    if (!root) {
        return root
    }
    if (root.val === val) {
        return root
    } else if (root.val > val) {
        return searchBST(root.left, val)
    } else {
        return searchBST(root.right, val)
    }
};
// @lc code=end

