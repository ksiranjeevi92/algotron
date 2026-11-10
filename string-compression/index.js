function compress(str) {
  let l = str.length;
  let r = "";

  if (l === 0) {
    return "";
  }

  if (l === 1) {
    return str + "1";
  }

  i = 1;
  cnt = 1;
  while (i < l) {
    if (str[i] === str[i - 1]) {
      cnt += 1;
    } else {
      r = r + str[i - 1] + String(cnt);
      cnt = 1;
    }
    i += 1;
  }
  r = r + str[i - 1] + String(cnt);
}

let res = compress("AA");

console.log(res);
