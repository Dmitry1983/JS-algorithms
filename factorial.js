factorial = (x) => {
  // recursiya
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
};

let num = 5;

console.log(`${num}! = ${factorial(num)}`);
