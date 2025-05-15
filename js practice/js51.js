const obj = {
  count: 10,
  inc: function () {
    return ++this.count;
  },
};

const incFn = obj.inc;
console.log(incFn()); 
