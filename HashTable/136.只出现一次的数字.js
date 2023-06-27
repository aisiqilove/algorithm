/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // let hashMap = new Map()
    // for (let i = 0; i < nums.length; i++) {
    //     const num = nums[i];
    //     if (hashMap.has(num)) {
    //         hashMap.set(num, hashMap.get(num) + 1)
    //     } else {
    //         hashMap.set(num, 1)
    //     }
    // }
    // for (let [key, value] of hashMap) {
    //     if (value === 1) {
    //         return key
    //     }
    // }
    let res = 0
    nums.forEach(num => {
        res ^= num
    })
    return res
};
// @lc code=end

