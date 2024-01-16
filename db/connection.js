const mongoose = require("mongoose");

const DB = "mongodb://ec2-3-110-196-136.ap-south-1.compute.amazonaws.com:27017";

const connectDB = ()=> mongoose
  .connect(DB)
  .then(() => console.log("data base connected"))
  .catch((error) => console.log("error" + error.message));



module.exports = {connectDB}