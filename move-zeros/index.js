function moveZeros(arr) {
  let j = arr.length - 1; //Move left if want right then use 0 as initial value
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j--;
    }
  }
  return arr;
}

console.log(moveZeros([1, 0, 3, 0, 4, 5, 6]));
