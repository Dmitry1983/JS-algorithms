const  confirmEnding =(str, target) => {
  return str
    .split("")
    .slice(str.length - target.length, str.length)
    .join("") === target
    ? true
    : false;
}

console.log(confirmEnding("Bastian", "n"));