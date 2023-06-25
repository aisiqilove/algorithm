/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// dp[i] 中间值 递推
// 确定初始值 
// 递推公式 循环
// 时间复杂度 2^n
// dp[i] = dp[i-1] + dp[i-2]


function helper(memo,n) {
    if(n<= 1) {
        return n
    }
    if(memo[n]) {
        return memo[n]
    }
    memo[n] =  helper(memo, n-1) + helper(memo,n-2)
    return memo[n]
}
var fib = function(n) {
    // if(n<= 1) {
    //     return n
    // }
    // return fib(n-1) + fib(n-2)

    // 优化
    // let memo = [] // 备忘录
    // return helper(memo,n)

    // let dp = [0,1]
    // for(let i =2;i<=n;i++) {
    //     dp[i] = dp[i-1] + dp[i-2]
    // }
    // return dp[n]

    // 减少空间复杂度
    if(n<=1) {
        return n
    }
    let dp1 = 0
    let dp2 = 1
    let dp3
    for(let i =2;i<=n;i++) {
        dp3 = dp1 + dp2
        dp1 = dp2
        dp2 = dp3
    }
    return dp3


};
// @lc code=end

