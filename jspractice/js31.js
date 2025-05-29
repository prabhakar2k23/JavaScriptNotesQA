const obj = {
    name: 'Emma',
    greet() {
      return `Hello, ${this?.name ?? 'Guest'}`;
    }
  };
  
  const result = obj.greet?.();
  console.log(result);  // Hello Emma
  