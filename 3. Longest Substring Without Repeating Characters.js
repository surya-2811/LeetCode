// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function(s) {
    let max_length = 0;
    let set = new Set();
     let left = 0;
     let right =0;
    while (right < s.length){
        let letter = s[right];
        if(!set.has(letter)){
            right ++;
            set.add(letter)
            max_length = Math.max(max_length, set.size)
        }else{
            set.delete(s[left])
            left++
        }
    }
    return max_length

};
let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))