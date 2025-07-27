function checkInput(input) {
  let charMap = { ")": "(", "}": "{", "]": "[" };

  let openChar = ["[", "{", "("];

  let closeChar = ["]", "}", ")"];

  let stack = [];

  for (let char of input) {
    if (openChar.includes(char)) {
      stack.push(char);
    } else if (closeChar.includes(char)) {
      if (stack.pop() !== charMap[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// Test cases
console.log(checkInput("({})")); // true
console.log(checkInput("({[]})")); // true
console.log(checkInput("({[}])")); // false
console.log(checkInput("({}[]( ){[]})")); // true
