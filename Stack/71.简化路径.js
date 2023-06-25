/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = []
    const p = path.split('/')

    for(let i=0;i<p.length;i++) {
        let cur = p[i]
        if(cur == '..') {
            stack.pop()
        } else if(cur && cur != '.') {
            stack.push(cur)
        }
    }
    return `/${stack.join('/')}`
};
// @lc code=end

