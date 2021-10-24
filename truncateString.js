function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }
  return str.split("").splice(0, num).concat([".", ".", "."]).join("");
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
