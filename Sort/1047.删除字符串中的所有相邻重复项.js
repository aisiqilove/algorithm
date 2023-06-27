/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        // let a 
        const c = s[i];
        if (stack.length && c === stack[stack.length - 1]) {
            stack.pop()
            continue
        }
        // a && stack.push(a)
        stack.push(c)
    }
    console.log(stack)
    return stack.join('')
};
// @lc code=end

