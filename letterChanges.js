// Have the function LetterChanges(str) take the str parameter being passed
// and modify it using the following algorithm. Replace every letter in the
// string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u)
// and finally return this modified string.

// Examples

// Input: "hello*3"
// Output: Ifmmp*3

// Input: "fun times!"
// Output: gvO Ujnft!

const input = "hello*3";

const letterChanges = (str) => {
  const arrABC = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const capital = ["a", "e", "i", "o", "u"];
  const regCapital = / [ a,o,i,e,u ] /g;

  const newIndex = (index) => {
    return index > 25 ? index - 26 : index;
  };
  const arrStr = str.split("");
  let result = [];
  for (let i = 0; i < arrStr.length; i++) {
    let indexItem = arrABC.indexOf(arrStr[i]);
    let newIndexItem = newIndex(indexItem + 1);
    let isCapial = capital.indexOf(arrABC[newIndexItem]) >= 0;
    console.log(isCapial);
    result.push(indexItem === -1 ? arrStr[i] : arrABC[newIndexItem]);
  }

  return result.join("");
};

console.log(letterChanges(input));
