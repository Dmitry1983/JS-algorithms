const input = [2, 1, 2, 4];

const approach = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(
      arr
        .map((item) => (arr.indexOf(item) !== i ? item : 1))
        .reduce((acc, rec) => acc * rec)
    );
  }
  return console.log({ arr, result });
};

approach(input);
