/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function () {
    MyQueue.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    MyQueue.queue.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    return MyQueue.queue.shift()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return MyQueue.queue[0] ? MyQueue.queue[0]: null
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return MyQueue.queue.length ? false : true
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

