// Array Addition
// Have the function ArrayAddition(arr) take the array of numbers stored in
//  arr and return the string true if any combination of numbers in the array
//   (excluding the largest number) can be added up to equal the largest number
//   in the array, otherwise return the string false. For example:
//   if arr contains [4, 6, 23, 10, 1, 3] the output should
//   return true because 4 + 6 + 10 + 3 = 23. The array will not be empty,
//   will not contain all the same elements, and may contain negative numbers.

// Examples

// Input: [5,7,16,1,2]
// Output: false

// Input: [3,5,-1,8,12]
// Output: true

// 1. For input [1,2,3,4] the output was incorrect. The correct output is true

// 2. For input [54,49,1,0,7,4] the output was incorrect. The correct output is true

// 3. For input [31,2,90,50,7] the output was incorrect. The correct output is true

const input = [54, 49, 1, 0, 7, 4];

const ArrayAddition = (arr) => {
  const max = Math.max(...arr);
  arr.splice(arr.indexOf(max));

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum === max) return true;
      if (max === arr[i] + arr[j]) return true;
    }
    // console.log({ sum });
  }

  //   console.log({ max, arr });
  return false; //arr;
};

console.log("[ " + input.toString() + " ] :", ArrayAddition(input));
