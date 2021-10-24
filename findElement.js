function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      return arr[i];
    }
  }
  return undefined;
}