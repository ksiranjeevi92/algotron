let arr = [15, 18, 2, 3, 6, 12];

function findRotationOfArray(arr) {
  let minIdx = 0;
  let elm = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (elm > arr[i]) {
      minIdx = i;
      elm = arr[i];
    }
  }
  return minIdx;
}

let res = findRotationOfArray(arr);

console.log(res);

// Binary search

function findTargte(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      return mid;
    }
    if (arr[mid] > target) {
      //[1,2,3,4]
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return -1;
}

let re = findTargte();

console.log(re);
