// String Periods
// Have the function StringPeriods(str) take the str parameter being passed and determine
// if there is some substring K that can be repeated N > 1 times to produce
// the input string exactly as it appears. Your program should return the longest
// substring K, and if there is none it should return the string -1.

// For example: if str is "abcababcababcab" then your program should
// return abcab because that is the longest substring that is repeated
// 3 times to create the final string. Another example:
// if str is "abababababab" then your program should return ababab
// because it is the longest substring. If the input string contains only
// a single character, your program should return the string -1.

// Examples

// Input: "abcxabc"
// Output: -1

// Input: "affedaaffed"
// Output: -1

// 1. For input "abcababcababcab" the output was incorrect. The correct output is abcab

// 2. For input "abababababab" the output was incorrect. The correct output is ababab

// 3. For input "gg" the output was incorrect. The correct output is g

// 4. For input "aaaaacccccacacaaaaacccccacac" the output was incorrect. The correct output is aaaaacccccacac

// 5. For input "aaaaaaaaaa" the output was incorrect. The correct output is aaaaa

// 6. For input "abcabcabc" the output was incorrect. The correct output is abc

// 7. For input "tttttttrtttttttrtttttttrtttttttr" the output was incorrect. The correct output is tttttttrtttttttr

const input = "tttttttrtttttttrtttttttrtttttttr";

const StringPeriods = (str) => {
  const length = str.length;
  for (let i = 2; i <= length; i++) {
    let index = parseInt(length / i);
    let partStr = str.slice(0, index);
    console.log({ index });
    if (partStr.repeat(i) === str) {
      return partStr;
    }
  }
  return -1;
};

console.log(StringPeriods(input));
