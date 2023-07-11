/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0
    // for (let i = 0, j = height.length - 1; i < j;) {
    //     const minHeight = height[i] > height[j] ? height[j--] : height[i++]
    //     max = Math.max(max, (j - i + 1) * minHeight)
    // }

    let i = 0, j = height.length - 1
    while (i < j) {
        if (height[i] > height[j]) {
            max = Math.max(max, height[j] * (j - i))
            j--
        } else {
            max = Math.max(max, height[i] * (j - i))
            i++
        }
    }
    return max
};
// @lc code=end

