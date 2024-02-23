const mongoose = require("mongoose");

const DB = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5";

const connectDB = ()=> mongoose
  .connect(DB)
  .then(() => console.log("data base connected"))
  .catch((error) => console.log("error" + error.message));



module.exports = {connectDB}