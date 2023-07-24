/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0;
    let temp = [];
    for(let i = 0; i < s.length; i++) {
        let index = temp.indexOf(s[i]);
        if(index !== -1) {
            temp.splice(0, index+1);
        }
        temp.push(s.charAt(i));
        res = Math.max(res, temp.length);
    }
    return res;

     // let max = 0;
    // let temp = [];
    // for (let i = 0; i < str.length; i++) {
    //     const cur = str[i];
    //     const index = temp.indexOf(cur);
    //     if (index !== -1) {
    //         temp = temp.slice(index + 1);
    //     }
    //     temp.push(cur);
    //     max = Math.max(max, temp.length);
    // }

    // return max;
};
// @lc code=end

