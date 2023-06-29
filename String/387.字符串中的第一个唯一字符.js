/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let arr = new Map()
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (arr.has(c)) {
            arr.set(c, arr.get(c) + 1)
        } else {
            arr.set(c, 1)
        }
    }
    let searchString 
    for (const [key, value] of arr) {
        if(value === 1) {
            searchString = key
            break
        }
      }
    return s.indexOf(searchString)
};
// @lc code=end

