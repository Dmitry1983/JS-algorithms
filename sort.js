const initialArray = [
  { id: 1, name: "item one", tags: ["music", "sport", "science"] },
  { id: 2, name: "item two", tags: ["music"] },
  { id: 3, name: "item three", tags: ["fun"] },
  { id: 4, name: "item four", tags: ["sport", "science"] },
  { id: 5, name: "item five", tags: [""] },
  { id: 6, name: "item four", tags: ["sport"] },
];

const tags = initialArray
  .map((item) => item.tags.join(","))
  .join(",")
  .split(",")
  .filter((value, index, array) => array.indexOf(value) === index);

const object = { ...initialArray }; //Object.assign({}, initialArray);

console.log(object);
console.log("\n");
console.log(tags);
console.log("\n");

const filterOneSecond = (array, tag) => {
  console.log(`:  '${tag}'  :`);
  console.log(array.filter((item) => item.tags.indexOf(tag) !== -1));
};

const filterGroupTag = (array, tags) => {
  return tags.forEach((item) => filterOneSecond(array, item));
};

filterGroupTag(initialArray, tags);

const camelCase = (line) => {
  return line
    .split("-")
    .filter((item) => !!item)
    .map((item, index) =>
      index === 0 ? item : item.charAt(0).toUpperCase() + item.slice(1)
    )
    .join("");
};

console.log(camelCase("--hello-world-to-me--"));

const summa = (array) => {
  return array.reduce(
    (previusValue, item, index, array) => previusValue + item,
    5
  );
};
console.log("summa >>");
console.log(summa([1, 2, 3, 4, 5]));

const multiMap = (array) => {
  return array.map((item) => item * 5);
};
console.log("multiMap >>");
console.log(multiMap([1, 2, 3]));
