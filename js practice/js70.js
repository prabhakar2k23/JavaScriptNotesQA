function mostFrequent(arr) {
  const freqMap = {};
  let maxCount = 0;
  let maxElement = null;

  for (let num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;

    if (freqMap[num] > maxCount) {
      maxCount = freqMap[num];
      maxElement = num;
    }
  }

  return maxElement;
}
console.log(mostFrequent([1, 2, 4, 2, 3, 3, 4, 3, 1, 4, 4]));