function outer() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const fn = outer();
console.log(fn());
console.log(fn());
