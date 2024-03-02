// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
  let count = 0;
  let max = 0;
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (let j in obj) {
    if (obj[j] > count) {
      count = obj[j];
      max = j;
    }
  }
  return max;
};

let nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
