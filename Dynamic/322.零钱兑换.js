/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // if(!amount) return amount
    // let dp = Array(amount+1).fill(Infinity)
    // dp[0] = 0
    // for(let i = 0; i<= coins.length;i++) {
    //     for(let j = coins[i]; j<= amount;j++) {
    //             dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
    //     }
    // }
    // return dp[amount] === Infinity ? -1 : dp[amount]

    if(!amount) return amount
    let dp = Array(amount+1).fill(Infinity)
    dp[0] = 0
    for(let i = 0; i<coins.length;i++) {
        for(let j = coins[i]; j<=amount;j++) {
            dp[j] = Math.min(dp[j],dp[j - coins[i]] + 1)
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end

