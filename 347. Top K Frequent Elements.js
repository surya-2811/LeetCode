// 347. Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

var topKFrequent = function(nums, k) {
    let map ={}
    let array =[]
    for(let i=0; i<nums.length; i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1
        }else{
            map[nums[i]]++
        }
    }
    let sortedNums = Object.keys(map).sort((a, b) => map[b] - map[a]);
    return sortedNums.slice(0,k)
};

let nums = [3,1,1,1,2,2,3];
let k = 2
console.log(topKFrequent(nums, k))