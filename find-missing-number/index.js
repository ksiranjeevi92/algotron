const array = [1, 3, 4, 6, 7, 8, 10];
let result = [];
for (let i = 0; i < array.length - 1; i++) {
  let current = array[i];
  let next = array[i + 1];

  for (let num = current + 1; num < next; num++) {
    result.push(num);
  }
}

console.log(result);
