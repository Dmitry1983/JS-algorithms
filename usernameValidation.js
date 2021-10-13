// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

const input01 = "qwer";
function CodelandUsernameValidation(str) {
  const regFirst = /[a-zA-Z]/; // 2
  const regLast = /[a-zA-Z0-9]/; // 4
  const reg = /^[\w]+$/; // 3

  return (
    str.length >= 4 &&
    str.length <= 24 &&
    reg.test(str) &&
    regFirst.test(str.slice(0, 1)) &&
    regLast.test(str.slice(-1))
  );
}

// keep this function call here
console.log(CodelandUsernameValidation(input01));
