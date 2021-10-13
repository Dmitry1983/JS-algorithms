// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10

const input = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
const input1 = ["1, 2, 3, 4, 5", "6, 7, 8, 9, 10"];

const intersection = (arr) => {
  const first = arr[0].split(", ");
  const second = arr[1].split(", ");
  let result = [];

  first.forEach((element) => {
    second.find((item) => (item === element ? result.push(element * 1) : null));
  });
  result = result.join(", ") || false;
  return console.log({ first, second, result });
};

intersection(input);
intersection(input1);
