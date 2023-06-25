/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    if(x < 10) {
        return true;
    }
    // const s = x.toString();
    // 字符串反转
    // return s === s.split('').reverse().join('');
    // 不使用字符串
    let num = x;
    let reverse = 0;
    while(num > 0) {
        reverse = reverse * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reverse === x;
};
// @lc code=end

