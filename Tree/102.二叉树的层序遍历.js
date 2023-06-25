/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
    let queue = []
    let res = []
    if(!root) {
        return res
    }
    queue.push(root)
    while(queue.length != 0) {
        let len = queue.length
        let list = []
        console.log(queue)
        for(let i = 0;i< len;i++) {
            let current = queue.shift();
            list.push(current.val)
            if(current.left) {
                queue.push(current.left)
            }
            if(current.right) { 
                queue.push(current.right)
            }
        }
       res.push(list)
    }
    return res
};
// @lc code=end

