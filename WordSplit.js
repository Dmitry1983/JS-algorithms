// Word Split
// Have the function WordSplit(strArr) read the array of strings stored in strArr,
// which will contain 2 elements: the first element will be a sequence of characters,
// and the second element will be a long string of comma-separated words, in alphabetical
// order, that represents a dictionary of some arbitrary length.

// For example: strArr can be: ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"].
// Your goal is to determine if the first element in the input can be split into two words,
// where both words exist in the dictionary that is provided in the second input.
// In this example, the first element can be split into
// two words: hello and cat because both of those words are in the dictionary.

// Your program should return the two words that exist in the dictionary separated
// by a comma. So for the example above, your program should return hello,cat.
// There will only be one correct way to split the first element of
// characters into two words. If there is no way to split string into two
// words that exist in the dictionary, return the string not possible.
// The first element itself will never exist in the dictionary as a real word.

// Examples

// Input: ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]
// Output: base,ball

// Input: ["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]
// Output: abcg,efd

// ["abc", "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o"]

const input = ["az", "a,b,c,d,e,f,farm,g,goal,hello,world,x,y,z,zzzz"];

const WordSplit = (strArr) => {
  let temp = [];
  const [line, words] = strArr;
  const dictionary = words.split(",");

  for (let i = 0; i < dictionary.length; i++) {
    if (line.search(dictionary[i]) !== -1) {
      temp.push(dictionary[i]);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      if (temp[i] + temp[j] === line) {
        return `${temp[i]},${temp[j]}`;
      }
      if (temp[j] + temp[i] === line) {
        return `${temp[j]},${temp[i]}`;
      }
    }
  }

  return "not possible";
};

console.log(WordSplit(input));
