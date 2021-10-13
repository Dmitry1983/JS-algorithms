class Base {
  constructor(param) {
    this.el = param;
    this.base = [
      { id: 0, title: "Do thomesing 0", isDo: false, isVisible: true },
      { id: 1, title: "Do thomesing 1", isDo: false, isVisible: false },
      { id: 2, title: "Do thomesing 2", isDo: true, isVisible: true },
      { id: 3, title: "Do thomesing 3", isDo: false, isVisible: true },
    ];
    this.update();
  }
  update() {
    this.el = "";
    this.el = "Worked";
  }
}

const base = new Base(100);

console.log(base);
