//Local host connection
const connectionString = "mongodb://username:password@localhost:27017/";
//service url
const connectioSRVString = "mongodb+srv://username:password@host/dbname";

const mongoose = require("mongoose");

async function connectDB(URI) {
  let connection = await mongoose.connect(URL);

  connection.then((err) => {
    if (!err) {
      console.log("Database connected");
    }
  });

  mongoose.connection.on("exit", () => {
    connection.connect();
  });

  process.on("SIGINT", () => {
    connection.disconnect();
    process.exit(0);
  });
}

module.exports = connectDB;

//
const connectToDb = require("./connect-to-mongodb.js");

connectToDb("mongodb://user:password@localhost:27017/test-db");
