listItems = [
  { name: "Bat", meta: "Green", age: 30 },
  { name: "Batman", meta: "Green & White", age: 35 },
  { name: "Spiderman", meta: "Red", age: 42 },
  { name: "Yetti", meta: "White", age: 50 },
  { name: "Superman", meta: "Red & White", age: 25 },
  { name: "Ironman", meta: "Red", age: 33 },
  { name: "Columb", meta: "Green & Red", age: 55 },
  { name: "Luter", meta: "Green & Red & White", age: 30 },
];

const AGE = "age";
const NAME = "name";
const META = "meta";

console.log("listItems : ", listItems);

let desc = false;

const sortNameBtn = (arr, sort) => {
  let array = sortArrayBy(arr, sort);
  desc = !desc;
  return array;
};

const sortArrayBy = (array, sort) => {
  console.log("sortArray by :", sort);
  array.sort((a, b) => {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;
    return 0;
  });

  if (desc) array.reverse();
  return array;
};

console.log(sortNameBtn(listItems, AGE));
console.log(sortNameBtn(listItems, AGE));
console.log(sortNameBtn(listItems, NAME));
console.log(sortNameBtn(listItems, NAME));
console.log(sortNameBtn(listItems, META));
console.log(sortNameBtn(listItems, META));

///---------------------------------------------------------------------------

const numberArray = [
  1, 2, 6, 4, 2, 6, 9, 8, 5, 7, 3, 22, 77, 232, 5, 8, 2234, 3,
];

const numberDesc = [...numberArray].sort((a, b) => a - b);
const numberDesc10 = numberArray
  .slice()
  .sort((a, b) => a - b)
  .map((i) => i * 10);

const numberUnDesc = [...numberArray].sort((a, b) => b - a);

console.log({ numberArray, numberDesc, numberDesc10, numberUnDesc });

// -----------------------------

const randomArray = Array(100)
  .fill(null)
  .map(() => Math.floor(Math.random() * 2000) - 1000);

console.log({ randomArray });

const descRundomArray = [...randomArray].sort((a, b) => b - a);

console.log({ descRundomArray });

///-------------------------------

const alphabet = "йцукенгшщзхъфывапролджэёячсмитьбю";

const colatore = new Intl.Collator("ru-Ru");

const alphabetArray = alphabet.split("");

const sortAlphabetArray = [...alphabetArray].sort(colatore.compare);

console.log({ alphabet, alphabetArray, sortAlphabetArray });

// --------------------------------
