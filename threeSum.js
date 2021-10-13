// Input: [10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2]
// Output: true
// Input: [12, 3, 1, -5, -4, 7]
// Output: false

const input = [12, 3, 1, -5, -4, 7];

function ThreeSum(arr) {
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 2; j < arr.length; j++) {
      for (let n = 3; n < arr.length; n++) {
        if (arr[0] === arr[i] + arr[j] + arr[n]) {
          //   console.log("sum : " + (arr[i] + arr[j] + arr[n]));
          //   console.log(`item : ${arr[i]} + ${arr[j]} + ${arr[n]}`);
          result.push([arr[i], arr[j], arr[n]]);
        }
      }
    }
  }
  console.log({ result });
  return !!(result.length > 2);
}

// keep this function call here
console.log(ThreeSum(input));
