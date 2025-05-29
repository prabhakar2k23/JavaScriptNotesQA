function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  return `Hi, ${this.name}`;
};

const p = new Person("John");
console.log(p.sayHi());
