function maxFrquencyNumber(arr) {
  if (arr.length === 0) return null;
  let res = null;
  let max = 0;
  let numMap = {};

  for (let num of arr) {
    numMap[num] = (numMap[num] || 0) + 1;
    if (numMap[num] > max) {
      max = numMap[num];
      res = num;
    }
  }
  return res;
}

console.log(maxFrquencyNumber([1, 3, 1, 3, 2, 1, 3, 3]));
