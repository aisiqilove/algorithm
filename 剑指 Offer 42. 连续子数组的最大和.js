
const getMaxSubSum = (arr) => {
    let maxSum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     let sum = 0;

    //     for (let j = i; j < arr.length; j++) {
    //         sum += arr[j];
    //         maxSum = Math.max(maxSum, sum);
    //     }
    // }
    let partialSum = 0;
    for (let i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        console.log(partialSum, 'partialSum')
        maxSum = Math.max(maxSum, partialSum);
        if(partialSum < 0 ) partialSum = 0;
    }
    return maxSum
}

let sum = getMaxSubSum([-2, -1, 1, 2]);
console.log(sum, 'sum')

// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n)。
var maxSubArray = function (nums) {
    let maxSum = nums[0];

    for(let i = 1; i< nums.length; i++) {
        nums[i] += Math.max(nums[i-1],0);
        maxSum = Math.max(maxSum,  nums[i]);
    }
    
    // let proSum = 0;
    // for(let num of nums) {
    //     proSum += num;
    //     maxSum = Math.max(maxSum, proSum);
    //     if(proSum < 0) proSum = 0;
    // }

    // for (let i = 0; i < nums.length; i++) {
    //     let proSum = 0;
    //     for (let j = i; j < nums.length; j++) {
    //         proSum += nums[j];
    //         maxSum = Math.max(maxSum, proSum);
    //     }
    // }
    return maxSum;
};