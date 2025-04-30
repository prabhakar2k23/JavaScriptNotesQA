for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000); // Prints 3, 3, 3
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000); // Prints 0, 1, 2
  }
  