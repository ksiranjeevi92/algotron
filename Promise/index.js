Promise.race([Promise.resolve("first"), Promise.resolve("second")])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function callApi(url, callback) {
  fetch(url)
    .then(async (res) => {
      callback(null, res);
    })
    .catch((err) => {
      callback(err, null);
    });
}

callApi(API_URL, async (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  try {
    let data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
});
