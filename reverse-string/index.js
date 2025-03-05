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
