/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    // return s.toLocaleLowerCase()
    let sArr = []
    for (let ch of s) {
        if(ch.charCodeAt() >= 65 && ch.charCodeAt()<= 90) {
            ch = String.fromCharCode(ch.charCodeAt() | 32)
        }
        sArr.push(ch)
    }
    return sArr.join('')
};
// @lc code=end

