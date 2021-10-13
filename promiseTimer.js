const delay = (ms) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(true), ms));
};

const log = () => {
  console.log("> resolve promise");
};

delay(3000).then((res) => res && log());
