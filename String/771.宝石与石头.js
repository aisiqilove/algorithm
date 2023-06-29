/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let types = new Set(jewels.split(''))
    let sum = 0
    for (let i = 0; i < stones.length; i++) {
        const s = stones[i];
        if(types.has(s)) {
            sum++
        }
    }
    return sum
};
// @lc code=end

