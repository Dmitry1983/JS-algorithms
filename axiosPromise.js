const axios = require("axios");

const URL =
  "https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583";

// - - -

const loading = (link) => {
  return new Promise((resolve, reject) => {
    console.log("Loading . . . ");
    axios
      .get(link)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err.response.status));
  });
};

loading(URL)
  .then((data) => console.log(data))
  .catch((err) => console.log("ERROR . . . : ", err))
  .finally((i) => console.log("Finally . . . "));
