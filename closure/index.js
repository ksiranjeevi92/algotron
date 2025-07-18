console.log(sum(1, 2));

console.log(sum(1)(2));

function sum(a, b) {
  if (b != undefined) {
    return a + b;
  }
  return (c) => a + c;
}
