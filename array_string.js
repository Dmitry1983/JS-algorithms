const namesArray = ["peter", "victoR", "SamAnta", "elIs"];

const rightNames = namesArray.map(
  (lettrs) => lettrs[0].toUpperCase() + lettrs.slice(1).toLowerCase()
);

console.log({ namesArray, rightNames }); // rightNames: [ 'Peter', 'Victor', 'Samanta', 'Elis' ]

const abc = "qwerty";

const abcArray = abc.split(""); // string to array  [ 'q', 'w', 'e', 'r', 't', 'y' ],

const abcToString = abcArray.toString(); // 'q,w,e,r,t,y',

const abcString = abcArray.join(""); // array to string  'qwerty',

const abcStringComa = abcArray.join(","); // array to string with coma   'q,w,e,r,t,y',

const abcArrayFromComa = abcStringComa.split(",");

console.log({
  abc,
  abcArray,
  abcToString,
  abcString,
  abcStringComa,
  abcArrayFromComa,
});

//--

const array2d = ["Hello", ["My", "name"], "world"];

const array1d = array2d.join(",").split(","); //

const array1dFlat = array2d.flat(2);

console.log({ array1d, array1dFlat }); ///   array1d: [ 'Hello', 'My', 'name', 'world' ]
