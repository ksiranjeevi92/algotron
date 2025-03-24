function palindromeV1(str) {
  let reversed = str.split("").reverse().join("");
  return reversed === str;
}

console.log(palindromeV1("abba"));

function palindromeV2(str) {
  return str.split("").every((elm, i) => {
    return elm === str[str.length - i - 1];
  });
}

console.log(palindromeV2("aba"));
