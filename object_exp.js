// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех
// зарплат с помощью метода Object.values и цикла for..of.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSallory = (obj) => {
  return console.log(
    "sum salory : ",
    Object.values(obj).reduce((a, b) => a + b)
  );
};

const maxSallory = (obj) => {
  return console.log(
    "max salari : ",
    Object.values(obj).reduce((a, b) => (a > b ? a : b))
  );
};

sumSallory(salaries);
maxSallory(salaries);

// Напишите функцию count(obj), которая возвращает количество свойств объекта:
let user = {
  name: "John",
  age: 30,
};

const countProp = (obj) => {
  return console.log("length obj : ", Object.keys(obj).length);
};

countProp(user);

// Напишите функцию sortByAge(users),
// которая принимает массив объектов со свойством age и сортирует их по нему.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

console.log("arr : ", arr);

const sortByAge = (arr) => {
  return arr.sort((a, b) => a.age - b.age);
};

console.log("sortByAge : ", sortByAge(arr));

// Напишите функцию getAverageAge(users), которая принимает массив
// объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

const getAverageAge = (arr) => {
  //   let sum = 0;
  //   arr.forEach((element) => {
  //     sum += element.age;
  //   });
  //   return sum / arr.length;

  return arr.reduce((acc, item) => acc + item.age, 0) / arr.length;
};

console.log("getAverageAge : ", getAverageAge(arr));

// Напишите функцию unique(arr), которая
// возвращает массив, содержащий только уникальные элементы arr

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

const unique = (arr) => {
  return [...new Set(arr)];
};

const uniqueFunction = (arr) => {
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      out.push(arr[i]);
    }
  }
  return console.log("uniqueFunction : ", { out });
};

uniqueFunction(strings);
console.log("unique : ", unique(strings));

// Код ниже получает из массива строк новый массив, содержащий их длины:

var arrayString = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arrayString.length; i++) {
  arrLength[i] = arrayString[i].length;
}

console.log({ arrLength }); // 4,5,2,5
