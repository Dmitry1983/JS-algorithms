const items = [
  { name: "Car", price: 200 },
  { name: "Bike", price: 100 },
  { name: "TV", price: 50 },
  { name: "Aircraft", price: 500 },
  { name: "Box", price: 10 },
];
console.log(items);
// ----------------------------------------------
const filterItems = items.filter((item) => {
  return item.price >= 200;
});
console.log("\n");
console.log(filterItems);
/// [ { name: 'Car', price: 200 }, { name: 'Aircraft', price: 500 } ]
// ----------------------------------------------
const mapItems = items.map((item) => {
  return { name: item.name, price: item.price * 2 };
});
console.log("\n");
console.log(mapItems);
// [
//   { name: 'Car', price: 400 },
//   { name: 'Bike', price: 200 },
//   { name: 'TV', price: 100 },
//   { name: 'Aircraft', price: 1000 },
//   { name: 'Box', price: 20 }
// ]
// ----------------------------------------------
////////////////////////////////////////////////
const findItems = (price) =>
  items.find((item) => {
    return item.price === price;
  });
console.log("\n");
console.log(findItems(100));
// { name: 'Bike', price: 100 }
// ----------------------------------------------
console.log("\n");
const forEachItems = items.forEach((element) => {
  const { price, name } = element;
  console.table({ price, name });
});
// ----------------------------------------------
const hasSomeItems = items.some((item) => {
  return item.price == 100;
});
console.log("\n");
console.log("hasSomeItems : ", hasSomeItems);
// hasSomeItems :  true
// ----------------------------------------------
const hasEveryItems = items.every((item) => {
  return item.price <= 200;
});
console.log("\n");
console.log("hasEveryItems : ", hasEveryItems);
// hasEveryItems :  false
// ----------------------------------------------
const summReduceItems = items.reduce((initialSumm, item) => {
  return item.price + initialSumm;
}, 0);
console.log("\n");
console.log("summ : ", summReduceItems);
//summ :  860
// ----------------------------------------------
array = [1, 2, 3, 4, 5, 6];

const includesInItems = array.includes(1);

console.log("\n");
console.log("includes : ", includesInItems);
//includes :  true
