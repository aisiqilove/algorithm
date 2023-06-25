/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
    // temp = [1]
    // backTrack
    // temp = [1, 2]
    //  backTrack
    //  temp = [1, 2, 3] 终止
    // temp = [1]
    //  backTrack
    //  temp = [1,3]
    //   backTrack

 function backTrack(list, temp, nums) {
    // 终止条件
    if(temp.length === nums.length) {
        return list.push([...temp])
    }
    for(let i = 0; i < nums.length; i++) {
        if(temp.includes(nums[i])) {
            continue
        }
        temp.push(nums[i])
        backTrack(list, temp, nums)
        temp.pop();
    }
}
// let temp = []
var permute = function(nums) {
    let list = []
    backTrack(list, [], nums)
    return list
};
// @lc code=end

