const myObj = {
  a: 1,
  b: 2,
  c: { a: 11, b: 12 },
  d: 4,
  data: [1, 2, 3, 4, 5, 6, 7],
};

const {
  a: myA = 10,
  c: { a: inA = 0, b: inB = 0 } = {},
  data: [data1, data2, ...dataTail] = [],
  ...tail
} = myObj || {};

let a, b;
({ a, b } = myObj);

console.log(`myA: ${myA}`);
console.log(tail);
console.log(`inA : ${inA}, inB : ${inB}`);
console.log(dataTail);
console.log(`a : ${a}, b : ${b}`);
