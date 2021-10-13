const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10, 10];

const sum = array.reduce((acc, curr) => acc + curr);

const max = array.reduce((acc, curr) => (acc > curr ? acc : curr));

const min = array.reduce((acc, curr) => (acc < curr ? acc : curr));

console.log({ sum, min, max });

const names = ["John", "Alice", "Maria", "Mir", "John"];

const namesS = [...new Set(names)];

console.log({ namesS });

const counts = names.reduce((accumulator, name) => {
  if (name in accumulator) {
    accumulator[name] = accumulator[name] + 1;
  } else {
    accumulator[name] = 1;
  }
  return accumulator;
}, {});

console.log({ counts });

const arrayOvc = ["🐑", 1, 2, "🐑", "🐑", 3];

const ovc = arrayOvc.filter((item, index) => {
  console.log(
    // a. Item
    item,
    // b. Index
    index,
    // c. indexOf
    arrayOvc.indexOf(item),
    // d. Condition
    arrayOvc.indexOf(item) === index
  );

  return array.indexOf(item) === index;
});

const flatmap = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
].flatMap((x) => x.attributes);

console.log({ flatmap });

// const filter = {
//   status: {
//     working: false,
//     missing: true,
//     weekend: false,
//     replacement: true,
//     blocked: false,
//     deactivated: false,
//   },
//   role: {
//     cleaner: false,
//     brigadier: true,
//     admin: false,
//   },
//   migrationCard: {
//     valid: false,
//     expired: false,
//   },
//   patent: {
//     valid: false,
//     expired: false,
//   },
// };

// const countsFilter = filter.reduce((accumulator, name) => {
//   if (name in accumulator) {
//     accumulator[name] = accumulator[name] + 1;
//   } else {
//     accumulator[name] = 1;
//   }
//   return accumulator;
// }, {});

// console.log({ countsFilter });
