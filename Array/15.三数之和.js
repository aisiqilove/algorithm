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
var threeSum = function (nums) {
    // 边界
    if (nums.length < 3) {
        return []
    }
    let list = [];
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        // 以[i] 为基准
        let left = i + 1;
        let right = nums.length - 1
        // 和之前的值对比
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        while (left < right) {
            if (right === i) {
                right-- // 越过i
            } else if (nums[left] + nums[right] + nums[i] === 0) {
                list.push([nums[left], nums[right], nums[i]])
                // 继续找 相同的值跳过，去重
                while (nums[left] === nums[left + 1]) {
                    left++
                }
                left++
                while (nums[right] === nums[right - 1]) {
                    right--
                }
                right--
            } else if (nums[left] + nums[right] + nums[i] > 0) {
                // 大于 -num[i] --
                right--
            } else {
                // 小于 ++
                left++
            }
        }
    }
    return list

    // 暴力 有重复项
    // let res = []
    // for (let i = 0; i < nums.length - 2; i++) {
    //     for (let j = i + 1; j < nums.length - 1; j++) {
    //         for (let k = j + 1; k < nums.length; k++) {
    //             if (nums[i] + nums[j] + nums[k] === 0) {
    //                  res.push([nums[i], nums[j], nums[k]])
    //             }
    //         }
    //     }
    // }
    // return res

    // k left right 双指针
    // 先从小到大排序
    // for (let k = 0;k<nums.length - 2;k++)
    // let left = k + 1, right = nums.length - 1
    // nums[k] > 0 break 结果永远大于0 跳过
    // k>0 nums[k] === nums[k-1] continue 跳过重复项
    // sum = nums[k] + nums[left] + nums[right]
    // sum > 0  right--
    // sum < 0  left++
    // sum === 0 res.push([nums[k] , nums[left] , nums[right]]) 同时跳过重复项
    // nums[left] === nums[left + 1] left++;
    // 正常 left++;
    // nums[right] === nums[right - 1] right--;
    // 正常 right--;
};
// @lc code=end

