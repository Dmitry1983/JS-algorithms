factorial = (x) => {
  console.log("x : ", x);
  if (x === 1) {
    return 1;
  }
  //   return x * factorial(x - 1);
  return x * factorial(x - 1);
};

let num = 5;

console.log(`${num}! = ${factorial(num)}`);
