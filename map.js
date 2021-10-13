const ent = [
  ["name", "Maxim"],
  ["name2", "Denis"],
  ["age", 11],
];

const obj = {
  name: "Maxim",
  age: 11,
};

const newMap = new Map(ent);

console.log(newMap);
console.log("entries : ", Object.entries(obj));
console.log(Object.fromEntries(ent));
