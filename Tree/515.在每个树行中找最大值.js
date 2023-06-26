/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
    let res = []
    if (!root) {
        return res
    }
    let queue = [root]
    while (queue.length) {
        let len = queue.length
        // let list = []
        let maxVal = queue[0].val
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            // list.push(node.val)
            maxVal = maxVal > node.val ? maxVal : node.val
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }

        // res.push(Math.max(...list))
        res.push(maxVal)
    }
    return res

};
// @lc code=end

