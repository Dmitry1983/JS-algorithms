const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9];

const numbers = [...numbers1, ...numbers2];

console.log(numbers);

console.log(Math.max(...numbers));

export const obj1 = {
  name: "Anna",
  surname: "Borisova",
};

const obj2 = {
  age: 26,
  height: 172,
};

const cloneObj1 = { ...obj1 };

console.log({ ...obj2, ...cloneObj1 });

const summ = (a, ...args) => {
  let result = a;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
};

console.log(`sum : ${summ(1, 2, 3, 4, 5)}`);
