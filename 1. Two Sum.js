// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



var twoSum = function(nums, target) {
    let map = {};
    for(let i= 0; i < nums.length; i++){
        console.log(i)
        let difference = target - nums[i]
        if(map.hasOwnProperty(difference)){
            return [map[difference], i]
        }

        map[nums[i]] = i
        console.log(map)
    }

};

nums = [2,7,11,15];
target = 9
console.log(twoSum(nums, target))