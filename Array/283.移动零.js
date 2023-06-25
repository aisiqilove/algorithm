/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let fast = 0
    let slow = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
            slow++
        }
        fast++
    }
    return nums
};
// @lc code=end

