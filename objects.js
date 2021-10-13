const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/todos/1";

const doRequest = async (link) => {
  let res = await fetch(link);

  if (res.ok) {
    let json = await res.json();

    return json;
  } else {
    return `>> HTTP error: ${res.status}`;
  }
};

doRequest(url).then((data) => {
  console.log(data);

  const keys = Object.keys(data);
  const values = Object.values(data);
  const entries = Object.entries(data);

  entries.map(([index, values]) => console.log(index, values));

  console.log(keys);
  console.log(values);
  console.log(entries);
});
