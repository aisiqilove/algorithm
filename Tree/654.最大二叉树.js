/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    function travese(nums) {
        if (!nums.length) {
            return null
        }
        // let max = nums[0]
        // for (let i = 0; i < nums.length; i++) {
        //     const num = nums[i];
        //     max = max > num ? max : num
        // }
        // let index = nums.findIndex((item) => item == max)

        let max = Math.max(...nums)
        let index = nums.indexOf(max)
        let root = new TreeNode(max)
        root.left =  travese(nums.slice(0, index)) 
        root.right = travese(nums.slice(index+1))
        return root
    }

    return travese(nums)
};
// @lc code=end

