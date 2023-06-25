/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
    // let list = []
    // const dfs = (root) => {
    //     if (root === null) {
    //         return 0
    //     }
    //     list.push(root)
    //     dfs(root.left)
    //     dfs(root.right)
    // }
    // dfs(root)
    // return list.length

    // let list = []
    // let queue = [root]
    // if(root === null) {
    //     return 0
    // }
    // while(queue.length !== 0) {
    //     let len = queue.length
    //     for (let i = 0; i < len; i++) {
    //         let cur = queue.shift()
    //         list.push(root.val)
    //         cur.left && queue.push(cur.left)
    //         cur.right && queue.push(cur.right)
    //     }
    // }
    // return list.length

    const dfs = (root) => {
        if (root === null) {
            return 0
        }
        return dfs(root.left) + dfs(root.right) + 1
    }
    return dfs(root)
};
// @lc code=end

