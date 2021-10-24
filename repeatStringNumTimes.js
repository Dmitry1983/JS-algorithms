function repeatStringNumTimes(str, num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr = arr.concat([str]);
  }
  return arr.join('');
}
console.log(repeatStringNumTimes("abc", 3));