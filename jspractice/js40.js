const numbers = [5, 2, 1, 2, 4, 5, 3];
const uniqueSorted = [...new Set(numbers)].sort((a, b) => a - b);
console.log(uniqueSorted); 
