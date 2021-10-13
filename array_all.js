const arr = ["Hello", "world", "!", 1, 2, 3, true, false, null, undefined, NaN];

// POP - Удаляет [последний] элемент из массива и возвращает его:
const popArr = [...arr];
popArr.pop();
console.log({ popArr }); // NaN

//PUSH - Добавляет элемент в [конец] массива:
const pushArr = [...arr];
pushArr.push("push", "push2");
console.log({ pushArr });

// SHIFT - Удаляет из массива [первый] элемент и возвращает его:
const shiftArr = [...arr];
shiftArr.shift();
console.log({ shiftArr });

// UNHIFT - Добавляет элемент в начало массива:
const unshiftArr = [...arr];
unshiftArr.unshift("unshift", "unshift2");
console.log({ unshiftArr });

//toString - возвращает строку - список элементов, разделённых запятыми.
const str = arr.toString();
console.log({ str }); //  'Hello,world,!,1,2,3,true,false,,,NaN'

// join - массив в строку по заданному разделителю
const joinStr = arr.join("");
console.log({ joinStr }); //'Helloworld!123truefalseNaN'

// split - строку в массив по заданному разделителю
const strSplit = "Hello, world";
const split = strSplit.split(",");
console.log({ split }); // [ 'Hello', ' world' ]
