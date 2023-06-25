/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let res = new Set()
    for (let i = 0; i < nums1.length; i++) {
        const a1 = nums1[i];
        for (let j = 0; j < nums2.length; j++) {
            const a2 = nums2[j];
            if(a1 == a2) {
                res.add(a1)
            }
        }
    }
    return [...res]
};
// @lc code=end

