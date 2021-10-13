class Animals {
  static type = "ANIMALS";

  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
    this.color = options.color;
  }

  voice() {
    console.log("I am a", this.name);
  }

  get ageInfo() {
    return this.age * 7;
  }

  set ageInfo(option) {
    this.age = option;
  }
}

const animals = new Animals({
  name: "dog",
  age: 5,
  hasTail: true,
  color: "black",
});

console.log(animals);
console.log(animals.voice());
console.log((animals.ageInfo = 8));
console.log(animals.ageInfo);
