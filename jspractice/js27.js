const data = {
    users: [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 }
    ]
  };
  
  const result = data.users?.[1]?.name ?? 'Unknown User';
  console.log(result);  // Bob
  