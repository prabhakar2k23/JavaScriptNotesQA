class Parent {
  constructor() {
    this.value = 100;
    console.log("Parent constructor");
  }

  show() {
    console.log("Parent value:", this.value);
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.value = 200;
    console.log("Child constructor");
  }

  show() {
    super.show();
    console.log("Child value:", this.value);
  }
}

const obj = new Child();
const showFn = obj.show;

console.log("--- Direct Call ---");
obj.show();

console.log("--- Detached Call ---");
showFn();