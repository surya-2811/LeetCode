// Given an array nums with n objects colored red, white, or blue, sort them in-place
// so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

function sortColors(nums) {
  let left = 0;
  let right = nums.length - 1;
  let middle = 0;
  while (middle <= right) {
    if (nums[middle] === 0) {
      [nums[left], nums[middle]] = [nums[middle], nums[left]];
      left++;
      middle++;
    } else if (nums[middle] === 1) {
      middle++;
    } else {
      [nums[right], nums[middle]] = [nums[middle], nums[right]];
      right--;
    }
  }
  return nums;
}

let nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
