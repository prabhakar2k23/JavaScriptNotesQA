const person = {
  name: 'Alice',
  greet: function () {
    console.log(this.name);
  },
};

const greetFn = person.greet;
greetFn(); 
