// Замыкание — это комбинация функции и лексического окружения, в котором эта функция
// была определена. Другими словами, замыкание даёт вам доступ к Scope (en-US) внешней
// функции из внутренней функции. В JavaScript замыкания создаются каждый раз
// при создании функции, во время её создания.

const multiplay = (a) => {
  return (b) => {
    return a * b;
  };
};

const multTwo = multiplay(2);
const multTen = multiplay(10);

const logTen = () => {
  console.log(multTen(20));
};

console.log(multTwo(20));
setTimeout(() => logTen(), 2000);
