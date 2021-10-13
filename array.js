let arr = ["Marina", "Sveta", "Maxim"];
console.log(arr);

let arrOne = [...arr]; //
let arrTwo = ["Evgeniy", "Andrey", "Nasta"];
arrOne.splice(0, 1, "Victor"); //
console.log(arrOne);

let arrConcat = arr.concat(arrTwo); //
console.log(arrConcat);

const fill = (arraySize, value) => {
  let arr = [];
  for (let i = 0; i < arraySize; i++) {
    arr.push(value);
  }
  return arr;
};

const size = 3;
const valueToFill = "a";
console.log("fill fuction : ");
console.log(fill(size, valueToFill)); // ['a', 'a', 'a']

const reverse = (array) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.unshift(array[i]);
  }
  return arr;
};

const reverseData = [1, 2, 3];
console.log("reverse function : ");
console.log(reverse(reverseData)); // [3, 2, 1]

const compact = (array) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] !== "" &&
      array[i] !== null &&
      array[i] !== undefined &&
      array[i] !== false &&
      array[i] !== 0
    ) {
      arr.push(array[i]);
    }
  }
  return arr;
};

const compactData = [0, 1, false, 2, undefined, "", 3, null];
console.log("compact function : ");
console.log(compact(compactData)); // [1, 2, 3]

const fromPairs = (array) => {
  let obj = {};
  array.forEach((item) => {
    obj[item[0]] = item[1];
  });
  return obj;
};

const fromPairsData = [
  ["a", 1],
  ["b", 2],
];
console.log(fromPairs(fromPairsData)); // { 'a': 1, 'b': 2 }

const multi = (a, b) => {
  return a * b;
};

console.log(multi(2, 3));

const stringLine = (firstName, secondName, age) => {
  return console.log(
    `Привет ${firstName} ${secondName} с возрастом ${age} лет!`
  );
};

stringLine("Ivan", "Sidorov", 28);

const sex = (s = "X") => {
  if (s === "M") {
    return console.log("Ваш пол мужской");
  }
  if (s === "F") {
    return console.log("Ваш пол женский");
  }
  return console.log("Ваш пол не опеределен");
};

sex();
sex("M");
sex("F");

const arrayMedian = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return (sum / array.length).toFixed(1);
};

console.log(arrayMedian([1, 3, 3, 3, 5, 7, 1, 3, 20]));

const binary = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (!!(array[i] % 2)) return false;
  }
  return true;
};

console.log(binary([2, 4, 6, 8]));
