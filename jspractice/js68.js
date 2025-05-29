function Person() {
  this.name = "John";
  return { name: "Alice" };
}
const p = new Person();
console.log(p.name);
