const copyArrayAndDo = (args, instructions) => {
  let newArgs = [];

  for (let i = 0; i < args.length; i++) {
    newArgs.push(instructions(args[i]));
  }
  return newArgs;
};

const squre = (number) => {
  return number * number;
};

const divideTwo = (number) => {
  return number / 2;
};

const newArray = [1, 2, 3, 4, 5];

const result = copyArrayAndDo(newArray, squre);

console.log(result);

const result2 = copyArrayAndDo(newArray, divideTwo);

console.log(result2);
