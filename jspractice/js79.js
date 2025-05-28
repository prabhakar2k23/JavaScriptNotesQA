class Weird {
  constructor() {
    this.name = "Weird";
    return { fake: true };
  }
}

const w = new Weird();
console.log(w.name);   // ?
console.log(w.fake);   // ?