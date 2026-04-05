async function test() {
  return Promise.resolve(5);
}
test().then((res) => console.log(res));
