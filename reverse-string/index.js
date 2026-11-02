function reverseV1(str) {
  return str.split("").reverse().join("");
}

function reverseV2(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

function reverseV3(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

//console.log(reverse('hello'));

//console.log(reverseV2("hello"));

console.log(reverseV3("hello"));

function reverseV4(str) {
  let words = [];
  let length = str.length;
  let spaces = [" "];

  let i = 0;
  while (i < length) {
    if (!spaces.includes(str[i])) {
      const wordStarts = i;
      while (i < length && !spaces.includes(str[i])) {
        i++;
      }
      words.push(str.slice(wordStarts, i));
    }
    i++;
  }
  manualReverse(words);
  return words.join(" ");
}

function manualReverse(list) {
  let left = 0;
  let right = list.length - 1;
  while (left < right) {
    [list[left], list[right]] = [list[right], list[left]];
    left++;
    right--;
  }
}

const res = reverseV4("   Hello John   how are you   ");
console.log(res);
