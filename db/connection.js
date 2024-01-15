const mongoose = require("mongoose");

const DB = process.env.DATABASE;

const connectDB = ()=> mongoose
  .connect(DB)
  .then(() => console.log("data base connected"))
  .catch((error) => console.log("error" + error.message));



module.exports = {connectDB}