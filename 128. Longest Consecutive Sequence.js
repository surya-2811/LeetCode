// 128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

var longestConsecutive = function(nums) {
    let longestSequence =0
    let set = new Set(nums)
    for(let num of nums){
        if(!set.has(num-1)){
            let len = 1;
            while(set.has(num + len)){
                len++
            }
            longestSequence = Math.max(longestSequence,len)
        }
    }
    return longestSequence;
};
let nums = [100,4,200,1,3,2]
console.log(longestConsecutive(nums))