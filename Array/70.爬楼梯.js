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

var helper = (hash, n) => {
    if (n <= 2) {
        return n
    }
    if (hash[n]) {
        return hash[n]
    }
    hash[n] = helper(hash, n - 1) + helper(hash, n - 2)
    return hash[n]
}
var climbStairs = function (n) {
    // if (n <= 2) {
    //     return n
    // }
    // return climbStairs(n - 1) + climbStairs(n - 2)

    // if (n <= 2) {
    //     return n
    // }
    // let dp1 = 2, dp2 = 1
    // for (let i = 3; i <= n; i++) {
    //     // dp1 = dp1 + (dp2 = dp1)
    //     const temp = dp1
    //     dp1 = dp1 + dp2
    //     dp2 = temp
    // }
    // return dp1

    // dp3 = dp[2] + dp[1] 3 
    // let dp = [0,1,2]
    // for(let i = 3; i<=n;i++ ) {
    //     dp[i] = dp[i-1] + dp[i-2]
    // }
    // return dp[n]

    const hash = [];
    return helper(hash, n)
};
// @lc code=end

