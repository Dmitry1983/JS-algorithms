// K Unique Characters

// Have the function KUniqueCharacters(str) take the str parameter being passed and find the longest
// substring that contains k unique characters, where k will be the first character from the string.

// The substring will start from the second position in the string because the first character will
// be the integer k.

// For example: if str is "2aabbacbaa" there are several substrings that all contain
// 2 unique characters, namely: ["aabba", "ac", "cb", "ba"], but your program should return "aabba"
// because it is the longest substring.

// If there are multiple longest substrings, then return the first
// substring encountered with the longest length. k will range from 1 to 6.

// Examples

// Input: "3aabacbebebe"
// Output: cbebebe

// Input: "2aabbcbbbadef"
// Output: bbcbbb

const input = "2aabbcbbbadef";

const KUniqueCharacters = (str) => {
  const [k, ...line] = str;
  const index = parseInt(k);
  const arr = [];
  for (let i = 0; i < line.length; i++) {
    let unicline = [];
    for (let j = i; j < line.length; j++) {
      let unicSet = [...new Set(unicline)];
      let l = unicSet.length;
      if (l >= index && unicSet.indexOf(line[j]) === -1) {
        break;
      }
      if (l <= index) {
        unicline.push(line[j]);
      }
    }
    arr.push(unicline);
  }

  return arr[
    arr
      .map((item) => item.length)
      .indexOf(Math.max(...arr.map((item) => item.length)))
  ].join("");
};

console.log(KUniqueCharacters(input));
