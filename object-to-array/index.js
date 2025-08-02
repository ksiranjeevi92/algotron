let obj = { name: "name", age: "age" };

const keys = Object.keys(obj);

const values = Object.values(obj);

const result = Object.entries(obj);

const res = Object.entries(obj).map(([key, values]) => `${key} : ${values}`);

console.log(keys);

console.log(values);

console.log(result);

console.log(res);
