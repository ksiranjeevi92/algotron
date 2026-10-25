function pairSum(arr, k) {
  if (arr.length < 2) {
    return;
  }

  const seen = new Set();
  const output = new Set();

  for (const num of arr) {
    const target = k - num;

    if (!seen.has(target)) {
      seen.add(num);
    } else {
      const smaller = Math.min(num, target);
      const larger = Math.max(num, target);
      // Serialize as a string to allow Set value-based deduplication
      output.add(`(${smaller}, ${larger})`);
    }
  }

  if (output.size > 0) {
    console.log(Array.from(output).join("\n"));
  }
}

// Example usage
pairSum([1, 3, 2, 2], 4);
