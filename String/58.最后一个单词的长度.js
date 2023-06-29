/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let index = s.length - 1

    while (s[index] === ' ') {
        index--
    }
    let wordLen = 0
    while (index >= 0 && s[index] !== ' ') {
        wordLen++
        index--
    }
    return wordLen
};
// @lc code=end

