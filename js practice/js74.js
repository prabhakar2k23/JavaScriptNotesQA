class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.name = 'Doggo';
  }
}

const pet = new Dog('Rex');
console.log(pet.name);
