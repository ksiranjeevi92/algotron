const users = [
  { name: "abc", age: 35, isAdmin: true },
  { name: "xyz", age: 25, isAdmin: true },
  { name: "pqr", age: 30, isAdmin: false },
];

const maxAge = users.reduce((max, user) => {
  return user.age > max.age ? user : max;
});

console.log(maxAge);
