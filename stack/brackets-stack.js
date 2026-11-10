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

//Well defined
function balancedCheck(s) {
  if (s.length % 2 !== 0) return false;

  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];

  for (const char of s) {
    if (char in pairs) {
      // char is a closing bracket: pop and check match
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    } else {
      // char is an opening bracket
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(balancedCheck("[{}]")); // true
