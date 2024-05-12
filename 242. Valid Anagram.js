// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true


var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    let sMap={};
    for(let char of s){
        if(sMap[char]){
            sMap[char]++
        }else{
            sMap[char] = 1
        }
    }
    for(let char of t){
        if(!sMap[char]){
            return false
        }
        if(sMap[char]){
            sMap[char]--
        }
        if(sMap[char] === 0){
            delete sMap[char]
        }
    }
    return true
};
let s = "anagram";
 let t = "nagaram";
 let map = new Map()
console.log(map)

console.log(isAnagram(s, t))

