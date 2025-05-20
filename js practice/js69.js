function countCharOccurrences(str) {
  const result = {};

  for (let char of str) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}

console.log(countCharOccurrences("hello")); 