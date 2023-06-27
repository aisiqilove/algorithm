/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function () {
    MyStack.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    MyStack.stack.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
   return MyStack.stack.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let arr = MyStack.stack
    return arr[arr.length - 1] ? arr[arr.length - 1] : null
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    let arr = MyStack.stack
    return arr.length ? false : true
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

