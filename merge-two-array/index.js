const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4, 5, 6, 7, 8, 9];

// const result = [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);

// console.log(result);

function merge(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return sort(merge(left), merge(right));
}

//Using Merge sort (or) two pointer
function sort(left, right) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      addUnique(result, left[i]);
      i++;
    } else if (left[i] > right[j]) {
      addUnique(result, right[j]);
      j++;
    } else {
      addUnique(result, left[i]);
      i++;
      j++;
    }
  }
  while (i < left.length) {
    addUnique(result, left[i++]);
  }
  while (j < right.length) {
    addUnique(result, right[j++]);
  }
  return result;
}

function addUnique(arr, value) {
  if (arr.length === 0 || arr[arr.length - 1] !== value) {
    arr.push(value);
  }
}

let res = merge([...arr1, ...arr2]);

console.log(res);
