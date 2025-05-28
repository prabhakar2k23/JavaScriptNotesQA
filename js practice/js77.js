class Animal {
  static category = "Living";
  
  constructor(name) {
    this.name = name;
  }

  static info() {
    return `Category: ${this.category}`;
  }

  info() {
    return `Name: ${this.name}`;
  }
}

const dog = new Animal("Dog");

console.log(Animal.info());
console.log(dog.info());
console.log(dog.category);  // ?
