const person = Object.create(
  {},
  {
    name: {
      value: "Dmitry",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthday: { value: 1983, enumerable: true },
    age: {
      get() {
        return new Date().getFullYear() - this.birthday;
      },
      set(value) {
        return console.log("set age :", value);
      },
    },
    sex: { value: "man", enumerable: true },
  }
);
person.name = "Dmitriy Barbash";
person.birthday = "???";
person.age = 100;

for (let key in person) {
  console.log(key, " : ", person[key]);
}

console.log("age : ", person.age);
