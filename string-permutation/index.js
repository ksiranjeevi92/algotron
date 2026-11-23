function permute(str) {
  let out = [];
  if (str.length === 1) {
    return (out = [str]);
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    for (perm of permute(remaining)) {
      out.push(char + perm);
    }
  }
  return out;
}

console.log(permute("abc"));
