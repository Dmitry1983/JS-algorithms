// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const nums = [2, 3, 4, 6, 11, 15],
  target = 9;

const twoSum = (nums, turget) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === turget) {
        return [i, j];
      }
    }
  }
  return undefined;
};

console.log(twoSum(nums, target));

const array = [171, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7];

const twoSumCoder = (arr) => {
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arr[0]) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result.join(" ") !== "" ? result.join(" ") : -1;
};
console.log(twoSumCoder(array));
