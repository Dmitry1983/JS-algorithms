const log = (...value) => console.log(value);

const delay = (ms) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(ms), ms));
};

delay(2000).then((res) => log(res));

Promise.all([delay(1000), delay(2500), delay(3500)]).then((res) => log(res));

Promise.race([delay(1000), delay(2500), delay(3500)]).then((res) => log(res));
