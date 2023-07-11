/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) {
        return n
    }
    // return climbStairs(n - 1) + climbStairs(n - 2)

    let dp1 = 2, dp2 = 1
    for (let i = 3; i <= n; i++) {
        // dp1 = dp1 + (dp2 = dp1)
        const temp = dp1
        dp1 = dp1 + dp2
        dp2 = temp
    }
    return dp1
};
// @lc code=end

