// 15. 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Example 1:

// Inpot: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);  // Sort the array

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate elements for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]]);
                
                // Skip duplicates for the second number
                while (j < k && nums[j] === nums[j + 1]) j++;
                // Skip duplicates for the third number
                while (j < k && nums[k] === nums[k - 1]) k--;

                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }

    return res;
};

// Example usage
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));  // Output: [[-1, -1, 2], [-1, 0, 1]]
