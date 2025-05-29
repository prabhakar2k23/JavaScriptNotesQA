class A {
  static hello() {
    return 'Hi from A';
  }
}

class B extends A {
  static hello() {
    return super.hello() + ' and B';
  }
}

console.log(B.hello());
