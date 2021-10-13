const axios = require("axios");

const URL1 = "https://jsonplaceholder.typicode.com/photos/1";
const URL2 = "https://jsonplaceholder.typicode.com/photos/2";
const URL3 = "https://jsonplaceholder.typicode.com/photos/3";

const log = (text = "", value = "") => {
  console.log(text, value);
};

const req = (link) => {
  return new Promise((resolve, reject) => {
    log("Loading url :", link);
    axios
      .get(link)
      .then((data) => resolve(data.data))
      .catch((error) => reject(error.response.status))
      .finally(log("Finally promise ..."));
  });
};

Promise.all([req(URL1), req(URL2), req(URL3)])
  .then((res) => log(res))
  .catch((err) => log(err));

// Promise.race([req(URL1), req(URL2), req(URL3)])
//   .then((res) => log(res))
//   .catch((err) => log(err));
