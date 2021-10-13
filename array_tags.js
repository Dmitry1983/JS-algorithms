const initialArray = [
  { id: 1, name: "item one", tags: ["music", "sport", "science"] },
  { id: 2, name: "item two", tags: ["music"] },
  { id: 3, name: "item three", tags: ["fun"] },
  { id: 4, name: "item four", tags: ["sport", "science"] },
  { id: 5, name: "item five", tags: [""] },
  { id: 6, name: "item four", tags: ["sport"] },
];

const flattags = initialArray
  .map((item) => item.tags)
  .flat()
  .sort();
// const unictags = [...new Set(flattags)];
// unictags.forEach((tag) => {
//   console.log({ tag });
//   initialArray.forEach((item) => {
//     item.tags.some((i) => i === tag) && console.log(item);
//   });
// });
let arr = [];
const unictagsArr = [...new Set(flattags)];
unictagsArr.forEach((tag) => {
  arr.push({ tag });
  initialArray.forEach((item) => {
    item.tags.some((i) => i === tag) && arr.push(item);
  });
});

console.log(Object.fromEntries(arr));
