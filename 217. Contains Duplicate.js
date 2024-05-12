// Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

var containsDuplicate = function(nums) {
    for(let i=0; i<nums.length; i++){
        for(let j=i +1 ; j<nums.length; j++){
           if(nums[i] === nums[j]){
            return true
           }
        }
    }
    return false
};
let nums =[1,2,3, 1]

function containsDuplicate1(nums) {
    // Create an empty hashmap to store occurrences of each number
    const hashmap = {};

    // Loop through the array
    for (let num of nums) {
    console.log(hashmap)

        // If the number is already in the hashmap, return true
        if (hashmap[num]) {
            return true;
        } else {
            // Otherwise, mark the number as seen by adding it to the hashmap
            hashmap[num] = true;
        }
    }

    // If no duplicates were found, return false
    return false;
}

// Example usage:
// const nums = [1, 2, 3, 1];
console.log(containsDuplicate1(nums)); // Output: true

console.log(containsDuplicate(nums))