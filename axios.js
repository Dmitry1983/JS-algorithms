const axios = require("axios");

let URLs = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts",
];

function getAllData(URLs) {
  return Promise.all(URLs.map(fetchData));
}

function fetchData(URL) {
  return axios
    .get(URL)
    .then(function (response) {
      return {
        success: true,
        data: response.data,
      };
    })
    .catch(function (error) {
      return { success: false };
    });
}

getAllData(URLs)
  .then((resp) => {
    console.log(resp);
  })
  .catch((e) => {
    console.log(e);
  });
