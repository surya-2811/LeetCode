// 53. Maximum Subarray

// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

//Bruteforce Solution

// function maxSubArray(arr) {
//   let maxSum = arr[0];
//   let startIndex;
//   let endIndex;
//   for (let i = 0; i < arr.length; i++) {
//     let currentSum = 0;
//     for (let j = i; j < array.length; j++) {
//       currentSum = currentSum + arr[j];
//       if (currentSum > maxSum) {
//         startIndex = i;
//         endIndex = j;
//         maxSum = currentSum;
//       }
//     }
//   }
//   return { maxSum, startIndex, endIndex };
// }

function maxSubArray(arr) {
  let maxSum = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
}
let array = [5, 4, -1, 7, 8];
console.log(maxSubArray(array));
