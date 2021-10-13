// Max Subarray

// Have the function MaxSubarray(arr) take the array of numbers stored in arr
// and determine the largest sum that can be formed by any contiguous subarray
// in the array.

// For example, if arr is [-2, 5, -1, 7, -3] then your program should
// return 11 because the sum is formed by the subarray [5, -1, 7].
// Adding any element before or after this subarray would make the sum smaller.

// Examples

// Input: [1, -2, 0, 3]
// Output: 3

// Input: [3, -1, -1, 4, 3, -1]
// Output: 8

const input = [-2, 5, -1, 7, -3];

const MaxSubarray = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = [...arr].slice(i, j + 1).reduce((acc, curr) => acc + curr);
      result.push(sum);
    }
  }

  return Math.max(...result);
};

console.log(MaxSubarray(input));
