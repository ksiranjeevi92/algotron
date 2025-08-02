function capitalization(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(capitalization("hello world!"));

function capital(input) {
  str = Array.isArray(input) ? input.join(" ") : str;
  let char = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] == " ") {
      char += str[i].toUpperCase();
    } else {
      char += str[i];
    }
  }
  return char;
}

console.log(capital(["hello", "world"]));
