const person = {
    getName: () => 'John',
    getAge: undefined
  };
  
  const name = person.getName?.() ?? 'Unknown';
  const age = person.getAge?.() ?? 'Age not available';
  
  console.log(name);  // John
  console.log(age);   // Age not available
  