// Palindromic Substring

// Have the function PalindromicSubstring(str) take the str parameter being
//  passed and find the longest palindromic substring, which means the longest
//  substring which is read the same forwards as it is backwards.

//  For example: if str is "abracecars" then your program should
//  return the string racecar because it is the longest palindrome within the input string.

// The input will only contain lowercase alphabetic characters.
// The longest palindromic substring will always be unique,
// but if there is none that is longer than 2 characters, return the string none.

// Examples

// Input: "hellosannasmith"
// Output: sannas

// Input: "abcdefgg"
// Output: none

// 1. For input "abcdefgg" the output was incorrect. The correct output is none

// 2. For input "acaaca" the output was incorrect. The correct output is acaaca

// 3. For input "dogcatfish" the output was incorrect. The correct output is none

// 4. For input "aabcdcbaa" the output was incorrect. The correct output is aabcdcbaa

// 5. For input "bbbbbbbbbbbbbbgg" the output was incorrect. The correct output is bbbbbbbbbbbbbb

const input = "hellosannasmith";

const PalindromicSubstring = (str) => {
  let result = "";
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      temp = str.substring(i, j);
      if (
        temp.length > 2 &&
        temp === [...temp].reduce((prev, next) => next + prev) &&
        temp.length > result.length
      )
        result = temp;
    }
  }
  if (result.length > 2) {
    return result;
  }
  return "none";
};

console.log(PalindromicSubstring(input));
