const promise = new Promise((resolve, reject) => {
  const res = false;
  const time = 2000;
  if (res) {
    setTimeout(() => {
      const reData = "Resolved!";
      resolve(reData);
    }, time);
  } else {
    reject("Error");
  }
});

promise.then(
  (res) => console.log(res),
  (err) => console.log(err)
);
