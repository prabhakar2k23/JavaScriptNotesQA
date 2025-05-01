class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return `${this.name} makes a noise.`;
    }
  
    static category() {
      return 'Living Being';
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    speak() {
      return `${super.speak()} ${this.name} barks.`;
    }
  
    static category() {
      return `${super.category()} -> Mammal`;
    }
  }
  
  const d = new Dog('Rex', 'Labrador');
  
  console.log(d.speak());           
  console.log(Dog.category());       
  console.log(Animal.prototype.speak);
  console.log(Dog.prototype.speak);
  console.log(d instanceof Animal);
  console.log(typeof Dog.category);
  