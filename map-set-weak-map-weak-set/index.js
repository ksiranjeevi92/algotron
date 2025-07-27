function print() {
  let map = new Map();

  map.set("1", 1);

  map.set("1", 2);

  console.log(map.get(1));

  console.log(map.has(1));

  map.forEach((value) => {
    console.log(value);
  });

  console.log(map.keys());

  console.log(map.size);
}

function printSet() {
  let set = new Set();

  set.add(1);
  set.add({ name: "name" });

  set.add(2);

  set.add(1);

  set.has(3);

  console.log(set.values);
}
