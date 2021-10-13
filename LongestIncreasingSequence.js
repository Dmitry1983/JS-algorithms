// Longest Increasing Sequence

// Have the function LongestIncreasingSequence(arr) take the array of positive integers
// stored in arr and return the length of the longest increasing subsequence (LIS).
// A LIS is a subset of the original list where the numbers are in sorted order,
// from lowest to highest, and are in increasing order.
// The sequence does not need to be contiguous or unique,
// and there can be several different subsequences.

// For example: if arr is [4, 3, 5, 1, 6] then a
// possible LIS is [3, 5, 6], and another is [1, 6].
// For this input, your program should return 3 because that is the length
// of the longest increasing subsequence.

// Examples

// Input: [4, 3, 5, 1, 6]
// Output: 3

// Input: [9, 9, 4, 2]
// Output: 1

// Input: [10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]
// Output: 7

// 1. For input [10, 12, 4, 6, 100, 2, 56, 34, 79]
// the output was incorrect. The correct output is 4

// 2. For input [10, 12, 4, 6, 100, 2, 56, 34, 79, 45, 33, 12, 45, 67, 89]
// the output was incorrect. The correct output is 6

// 1. For input [2, 4, 3, 5, 1, 7, 6, 9, 8] the output was incorrect. The correct output is 5

// 2. For input [9, 9, 2, 4] the output was incorrect. The correct output is 2

// 3. For input [9, 9, 4, 2] the output was incorrect. The correct output is 1

// 4. For input [10, 12, 4, 6, 100, 2, 56, 34, 79] the output was incorrect. The correct output is 4

const input = [10, 12, 4, 6, 100, 2, 56, 34, 79, 45, 33, 12, 45, 67, 89];

// function LongestIncreasingSequence1(arr) {
//   var sets = [[]];
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0, len = sets.length; j < len; j++) {
//       console.log({ len });
//       if (sets[j].length === 0) {
//         sets.push(sets[j].concat(arr[i]));
//         // console.log("push first", arr[i]);
//       } else if (arr[i] > Math.max(...sets[j])) {
//         sets.push(sets[j].concat(arr[i]));
//         // console.log("push second", arr[i]);
//       }
//     }
//   }
//   console.log({ sets });
//   return Math.max(...sets.map((x) => x.length));
// }

const LongestIncreasingSequence = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    temp.push(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > temp[temp.length - 1]) {
        // if (arr[j] !== Math.max(...arr)) {
        temp.push(arr[j]);
        // }
      }
    }
    result.push(temp);
  }
  return Math.max(...result.map((i) => i.length));
};

console.log(LongestIncreasingSequence(input));
