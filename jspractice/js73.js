class Counter {
  count = 0;

  increment() {
    this.count++;
  }
}

const counter = new Counter();
const inc = counter.increment;

inc();
console.log(counter.count);
