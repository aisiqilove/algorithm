/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let n = nums.length
    if (n === 0) {
        return n
    }
    // 
    // [1,3,5] [1,3,4]
    let arr = [nums[0]]
    for (let i = 0; i < n; i++) {
        if (nums[i] > arr[arr.length - 1]) {
            arr.push(nums[i])
        } else {
            let left = 0
            let right = arr.length - 1
            while (left < right) {
                let mid = (left + right) >> 1
                if (arr[mid] < nums[i]) {
                    left = mid + 1
                } else {
                    right = mid
                }
            }
            arr[left] = nums[i]
        }
    }
    return arr.length

    // [1,1,1,1,1,1]
    // 1. 1 > 0 [1,1,1,1,1,1]
    // 2. 0 > 0 [1,2,1,1,1,1]
    // 3. 0 > 1 [1,2,1,1,1,1]
    // 4. 3 > 0 [1,2,1,1,1,1]
    // 5. 3 > 1 [1,2,1,2,1,1]
    // 6. 3 > 0 [1,2,1,3,1,1]
    // 7. 2 > 0 [1,2,1,3,1,1]
    // 8. 2 > 1 [1,2,1,3,2,1]
    // 9. 2 > 0 [1,2,1,3,3,1]
    // 10. 2 > 3 [1,2,1,3,3,1]
    // 11. 3 > 0 [1,2,1,3,3,1]
    // 12. 3 > 1 [1,2,1,3,3,2]
    // 13. 3 > 0 [1,2,1,3,3,3]
    // 14. 3 > 2 [1,2,1,3,3,3]
    // 15. 3 > 3 [1,2,1,3,3,3]
    // [0,1,0,3,2,3]

    // let dp = Array(n).fill(1)
    // for(let i = 0; i < n;i++) {
    //     for(let j = 0; j < i;j++) {
    //         console.log(i,j,dp)
    //         if(nums[i]>nums[j]) {
    //             dp[i] = Math.max(dp[i], dp[j]+1)
    //         }
    //     }
    // }
    // return Math.max(...dp)
};
// @lc code=end

