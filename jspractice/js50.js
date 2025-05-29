let user = {
  name: "Jane",
  logName() {
    return () => this.name;
  },
};

let fn = user.logName();
console.log(fn()); 
