// 49. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


var groupAnagrams = function(strs) {
    const anagramsMap = {};
    for(let word of strs){
        let sortedWord = word.split("").sort().join("");
        if(anagramsMap.hasOwnProperty(sortedWord)){
            anagramsMap[sortedWord].push(word)
        }else{
            anagramsMap[sortedWord] = [word]
        }
    }
    return Object.values(anagramsMap)
};

// Example usage:
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
