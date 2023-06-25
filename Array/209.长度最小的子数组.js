/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    // let len = nums.length
    // let res = len + 1
    // for (let i = 0; i < len; i++) {
    //     let sum = 0
    //     for (let j = i; j < len; j++) {
    //         sum += nums[j]
    //         if(sum >= target) {
    //             let subLen = j-i + 1
    //             res = res > subLen ? subLen : res
    //             break
    //         }
    //     }
    // }
    // return res > len ? 0 : res

    let len = nums.length
    let res = len + 1
    let fast = slow = 0
    let sum = 0
    while(fast<len) {
        sum += nums[fast++]
        while(sum>=target) {
            let subLen = fast - slow
            res = res > subLen ? subLen : res
            sum -= nums[slow++]
        }
    }
    return res > len ? 0 : res

};
// @lc code=end

