function groupByFirstLetter(words) {
  const result = {};

  for (let word of words) {
    const firstLetter = word[0].toLowerCase(); 
    if (!result[firstLetter]) {
      result[firstLetter] = [];
    }
    result[firstLetter].push(word);
  }
  return result;
}

console.log(groupByFirstLetter(["apple", "banana", "apricot"]));

