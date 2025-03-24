function chunk(array, size) {
  const chunked = [];
  for (let elm of array) {
    let last = chunked[chunked.length - 1];
    if (!last) {
      chunked.push(elm);
    } else {
      last.push(elm);
    }
  }
  return chunked;
}

function chunkV2(array, size) {
  let chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

console.log(chunkV2([1, 2, 3, 4, 5, 6], 2));
