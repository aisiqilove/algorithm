/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 栈
    const stack = [];
    const obj = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    for(let i = 0; i < s.length; i++) {
        const c = s[i];
        if(obj[c]) {
            stack.push(c);
        } else {
            if(obj[stack.pop()] !== c) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
// @lc code=end

