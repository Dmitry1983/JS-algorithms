// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

const l1 = [9, 9, 9, 9, 9, 9, 9],
  l2 = [9, 9, 9, 9];

const addTwoNumbers = (l1, l2) => {
  return (parseInt(l1.reverse().join("")) + parseInt(l2.reverse().join("")))
    .toString()
    .split("")
    .reverse()
    .map((e) => parseInt(e));
};

console.log(addTwoNumbers(l1, l2));
