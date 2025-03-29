function fib(n) {
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    let a = result[i - 1];
    let b = result[i - 2];
    result.push(a + b);
  }
  return result[n];
}

function memoization(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    let result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fibV2(n) {
  if (n < 2) {
    return n;
  }
  return fibV3(n - 1) + fibV3(n - 2);
}

const fibV3 = memoization(fibV2);

// console.log(fib(3));

// console.log(fibV2(6));
console.log(fibV3(5));
