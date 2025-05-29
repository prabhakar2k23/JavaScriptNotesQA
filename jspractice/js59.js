function outer() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const fn = outer();

for (let i = 1; i <= 100; i++) {
  process.stdout.write(fn() + ", ");
}