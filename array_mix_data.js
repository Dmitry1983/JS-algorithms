const mixArray = [
  "peter",
  null,
  1,
  true,
  2,
  "victoR",
  34,
  -17,
  false,
  "SamAnta",
  10,
  null,
  "elIs",
  undefined,
  NaN,
];

const wordsArray = mixArray.filter((item) => typeof item === "string");
const namberArray = mixArray.filter((item) => typeof item === "number");
const booleanArray = mixArray.filter((item) => typeof item === "boolean");
const undefinedArray = mixArray.filter((item) => typeof item === "undefined");

console.log({ wordsArray, namberArray, booleanArray, undefinedArray });
