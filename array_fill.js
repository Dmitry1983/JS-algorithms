const fillArray = (n, group) => {
  let array = Array(n)
    .fill(null)
    .map(() => parseInt((Math.random() * 1000).toFixed(0)));
  let sort = [...array].sort((a, b) => a - b);
  let groupArray = [];

  for (let i = 0; i < n; i++) {
    if (sort[i] <= group) {
      groupArray.push(sort[i]);
    }
  }
  let arrCopy = [];
  groupArray.forEach((item, index) => arrCopy.push(item * 3));

  return console.log({ n, array, sort, groupArray, arrCopy });
};

fillArray(100, 200);
