function formatNumberRange(arr) {
  if (arr.length === 0) return "";

  const sorted = [...arr].sort((a, b) => a - b);
  const group = [];

  let start = sorted[0];
  let prev = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    let current = arr[i];
    if (current === prev + 1) {
      prev = current;
    } else {
      group.push(start === prev ? String(start) : `${start} - ${prev}`);
      start = current;
      prev = current;
    }
  }
  group.push(start === prev ? String(start) : `${start} - ${prev}`);
  return group.join(",");
}

let res = formatNumberRange([1, 2, 3, 5, 7, 8, 9]);

console.log(res);
