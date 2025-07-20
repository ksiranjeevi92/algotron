function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin != i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  console.log(arr);
}

selectionSort([23, 4, 56, 77, 1, 2]);
