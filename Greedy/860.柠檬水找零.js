/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
// 贪心 没有反例
var lemonadeChange = function(bills) {

    let fiveNums = 0
    let tenNums = 0

    for(let i =0; i<bills.length;i++){
        if(bills[i] === 5) {
            fiveNums += 1
        } else if(bills[i] === 10) {
            if(fiveNums>0) {
                fiveNums -= 1
                tenNums += 1
            } else {
                return false
            }
        } else {
            if(tenNums>0 && fiveNums>0 ) {
                fiveNums -= 1
                tenNums -= 1
            } else if( fiveNums>2) {
                fiveNums -= 3
            } else {
                return false
            }
        }
    }
    return true


};
// @lc code=end

