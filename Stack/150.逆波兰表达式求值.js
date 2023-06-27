/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    let calc = {
        '+': (a, b) => a + b,
        '-': (a, b) => b - a,
        '*': (a, b) => a * b,
        '/': (a, b) => b / a | 0,
    }
    for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];
        if (t in calc) {
            stack.push(calc[t](stack.pop(), stack.pop()))
        } else {
            stack.push(Number(t))
        }

    }
    return stack.pop()
};
// @lc code=end

