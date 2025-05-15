const person = {
  name: 'Bob',
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

person.greet(); 
