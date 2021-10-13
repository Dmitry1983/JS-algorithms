// Equivalent Keypresses
// Have the function EquivalentKeypresses(strArr) read the array of strings stored
// in strArr which will contain 2 strings representing two comma separated lists of
// keypresses. Your goal is to return the string true if the keypresses produce the
// same printable string and the string false if they do not. A keypress can be either
// a printable character or a backspace represented by -B. You can produce a printable
// string from such a string of keypresses by having backspaces erase one preceding
// character.

// Examples

// Input: ["a,b,c,d", "a,b,c,d,-B,d"]
// Output: true

// Input: ["c,a,r,d", "c,a,-B,r,d"]
// Output: false

// 1. For input ["q,w,e,r,t,y", "-B,-B,q,w,w,-B,e,r,t,y"] the output was incorrect. The correct output is true

// 2. For input ["p,o,i,n,-B,t", "-B,p,o,i,t"] the output was incorrect. The correct output is true

// 3. For input ["", "-B,-B,-B"] the output was incorrect. The correct output is true

// 4. For input ["s,t,r,e,e,t", "-B,s,s,-B,t,r,e,e,t"] the output was incorrect. The correct output is true

// 1. For input ["", "-B,-B,-B"] the output was incorrect. The correct output is true

const input = ["q,w,e,r,t,y", "-B,-B,q,w,w,-B,e,r,t,y"];
const input2 = ["c,a,r,d", "c,a,-B,r,d"];

const EquivalentKeypresses = (strArr) => {
  const backspace = (str) => {
    const arr = str.split(",");
    for (let i = 0; i <= arr.length; i++) {
      const findB = arr.indexOf("-B");
      if (findB !== -1) {
        arr.splice(findB === 0 ? findB : findB - 1, findB === 0 ? 1 : 2);
        i = 0;
      }
    }
    return arr.join(",");
  };

  return backspace(strArr[0]) === backspace(strArr[1]);
};

console.log(EquivalentKeypresses(input));
// console.log(EquivalentKeypresses(input2));
