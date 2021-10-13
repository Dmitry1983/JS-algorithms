// Have the function QuestionsMarks(str) take the str string parameter,
// which will contain single digit numbers, letters, and question marks,
// and check if there are exactly 3 question marks between every pair of
// two numbers that add up to 10. If so, then your program should return
// the string true, otherwise it should return the string false. If there
// aren't any two numbers that add up to 10 in the string, then your program
// should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should
// return true because there are exactly 3 question marks between 6 and 4,
// and 3 question marks between 5 and 5 at the end of the string.

// const input = "acc?7??sss?3rr1??????5";
// const input = "arrb6???4xxbl5???eee5";

const input = "5??aaaaaaaaaaaaaaaaaaa?5?5";

const questionsMarks = (str) => {
  const symb = "?";
  let result = [];
  const reg = /[0-9 ?]/;
  let filterStr = [];
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (reg.test(str[i])) {
      filterStr.push(str[i]);
    }
  }
  for (let i = 0; i < filterStr.length; i++) {
    if (filterStr[i] === symb) {
      result.push(
        filterStr[i - 1] * 1 + filterStr[i + 3] * 1 === 10 ? true : false
      );
    }
  }
  result = !!Math.max(...result);
  return console.log({ result });
};

questionsMarks(input);
