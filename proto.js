const log = (...values) => console.log(values);
function logThis() {
  console.group();
  console.log("Log this :", this);
  console.groupEnd();
}

const obj = { name: "name" };

const person = {
  name: "Maxim",
  age: 11,
  greet: function (job, phone) {
    log(`Hello, my name is ${this.name}, I'm ${this.age} years old`);
    log(job);
    log(phone);
  },
  logT: logThis.bind(obj),
};

const lena = Object.create(person);

lena.name = "Elena";
lena.age = 59;
lena.greet = function () {
  log(`Hello, my name is ${this.name}, I'm ${this.age} years old, I'm mather`);
};

const marina = {
  age: 32,
  name: "Marina",
};

person.greet.bind(lena)("reactor", "+7-999-1234567");
person.greet.call(marina, "reactor", "+7-999-1234567");
person.greet.apply(lena, ["reactor", "+7-999-1234567"]);

// person.greet();
// person.logT();
// lena.greet();
