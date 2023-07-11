/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 边界
    if(nums.length<3) {
        return []
    }
    let list = [];
    nums.sort((a,b) => a-b)
    for(let i = 0; i<nums.length;i++) {
        // 以[i] 为基准
        let left = i + 1;
        let right = nums.length - 1
        // 和之前的值对比
        if(nums[i] === nums[i-1]) {
            continue;
        }
        while(left<right) {
            if(right === i) {
                right-- // 越过i
            } else if(nums[left]+ nums[right] + nums[i] === 0) {
                list.push([nums[left], nums[right], nums[i]])
                // 继续找 相同的值跳过，去重
                while(nums[left] === nums[left+1]) {
                    left++
                }
                left++
                while(nums[right] === nums[right-1]) {
                    right--
                }
                right--
            } else if(nums[left]+ nums[right] + nums[i] > 0) {
                // 大于 -num[i] --
                right--
            } else {
                // 小于 ++
                left++
            }
        }
    }
    return list
};
// @lc code=end

