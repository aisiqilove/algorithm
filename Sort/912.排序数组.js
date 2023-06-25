/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    // 冒泡
    // for (let j = 0; j < nums.length; j++) {
    //     for (let i = 0; i < nums.length - j; i++) {
    //         if (nums[i] > nums[i + 1]) {
    //             [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
    //         }
    //     }
    // }
    // return nums
    
    // 快排
    // if(nums.length <= 1) return nums
    // let left = []
    // let right = []
    // let cIndex = Math.floor(nums.length/2)
    // let flag = nums.splice(cIndex,1)[0]
    // for(let i = 0; i< nums.length; i++) {
    //     if(flag > nums[i]) {
    //         left.push(nums[i])
    //     } else {
    //         right.push(nums[i])
    //     }
    // }
    // return sortArray(left).concat(flag, sortArray(right))

    // [a,b,c,d,e,f,j]

    // 原地快排
    quickSort(nums, 0, nums.length-1)
    return nums

};

function quickIndex(arr, start, end) {
    let init = start
    let flag = arr[init]
    start++
    while(start<=end) {
        while(arr[end]>flag) {
            end--
        }
        while(arr[start]<flag) {
            start++
        }
        if(start<end) {
            [arr[start],arr[end]] = [arr[end],arr[start]]
            start++
            end--
        }
    }
    [arr[init],arr[start-1]] = [arr[start-1],arr[init]]
    return start
}
function quickSort(arr, start, end) {
    if(start < end) {
        let index = quickIndex(arr, start, end)
        quickSort(arr,start, index -1)
        quickSort(arr,index, end)
    }
    return arr
}
// @lc code=end

