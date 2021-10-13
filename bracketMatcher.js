// Have the function BracketMatcher(str) take the str parameter being passed and return 1 if
// the brackets are correctly matched and each one is accounted for. Otherwise return 0.
// For example: if str is "(hello (world))", then the output should be 1, but if str is
// "((hello (world))" the the output should be 0 because the brackets do not correctly match up.
// Only "(" and ")" will be used as brackets. If str contains no brackets return 1.

// Input: "(coder)(byte))"
// Output: 0
// Input: "(c(oder)) b(yte)"
// Output: 1

const input = "((coder)(byte))";

const bracketMatcher = (str) => {
  const left = "(";
  const right = ")";
  const arr = str.split("");
  return arr.filter((item) => item === left).length ===
    arr.filter((item) => item === right).length
    ? 1
    : 0;
};

bracketMatcher(input);
