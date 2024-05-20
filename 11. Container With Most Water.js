// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

 

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
      let diff = right - left;
      max = Math.max(max, Math.min(height[left], height[right]) * diff);
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
    return max;
};
let height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))