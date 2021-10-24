function titleCase(str) {
  return str.split(" ").map((el) => {
    return el[0].toUpperCase()+el.toLowerCase().slice(1);
  }).join(' ')
}

console.log(titleCase("I'm a little tea pot"));