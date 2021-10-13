Sum = (arr) => {
  let length = arr.length;
  console.log(" arr : ", arr);
  console.log(" length : ", length);

  if (length === 0) {
    return 0;
  }
  if (length === 1) {
    return arr[0];
  }

  return Sum([arr[0] + arr[1], ...arr.slice(2)]);
};

let arr = [1, 2, 3, 4, 5];

console.log("Summa : ", Sum(arr));
