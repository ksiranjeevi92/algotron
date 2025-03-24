function reverseNumber(number) {
  let strNum = number.toString();
  let reversed = strNum.split("").reverse().join("");
  return parseInt(reversed) * Math.sign(number);
}

console.log(reverseNumber(-600));
