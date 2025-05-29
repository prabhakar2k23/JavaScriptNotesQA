class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const person = new Person('Alice');

const getName = person.getName;

console.log(getName());
