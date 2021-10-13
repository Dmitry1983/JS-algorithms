const array_factorial = (n) => {
  let factorial = 1;
  const array = Array(n).fill(1);
  for (let i = 1; i <= n; i++) {
    factorial *= i;
    array[i - 1] = factorial;
  }
  return console.log({ n, array });
};
array_factorial(20);
