// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
// In this case, 6 units of rain water (blue section) are being trapped.

function trapingRainWater(height) {
  let leftMax = new Array(height.length).fill(0);
  let rightMax = new Array(height.length).fill(0);
  let totalWater = 0;
  leftMax[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  rightMax[height.length - 1] = height[height.length - 1];

  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  for (let i = 0; i < height.length; i++) {
    totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return totalWater;
}
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trapingRainWater(height));
