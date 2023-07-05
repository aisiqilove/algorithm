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
    // 双指针 换位
    // let fast = 0
    // let slow = 0
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i]) {
    //         [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
    //         slow++
    //     }
    //     fast++
    // }
    // return nums

    // 找到0 删除 末尾添加0
    // let temp = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if(!nums[temp]) {
    //         nums.splice(temp,1)
    //         nums[nums.length] = 0
    //     } else {
    //         temp++
    //     }
    // }
    for (let i = 0; i < nums.length; i++) {
        let j = 0
        if (nums[i]) {
            nums[j] = nums[i]
            if (i != j) {
                nums[i] = 0
            }
            j++
        }
    }
};
// @lc code=end

