function Parent() {
  this.value = 42;
}

Parent.prototype.getValue = function () {
  return this.value;
};

function Child() {
  this.value = 100;
}

// Inherit from Parent
Child.prototype = new Parent();
Child.prototype.constructor = Child;

Child.prototype.getValue = function () {
  return Parent.prototype.getValue.call(this) + 1;
};

const obj = new Child();

console.log(obj.getValue());
