function anagram(stringA, stringB) {
  let aCharmap = buildCharMap(stringA);
  let bCharMap = buildCharMap(stringB);
  //console.log(aCharmap);
  if (Object.keys(aCharmap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for (let char in aCharmap) {
    if (aCharmap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  let charMap = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

function anagramV2(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").split("").sort().join("");
}

console.log(anagramV2("node", "deno"));
