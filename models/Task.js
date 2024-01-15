const mongoose = require("mongoose");
const { position } = require("./path");

const subTasks = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    nodes:[position]
})

const TaskSchema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true,
        max:20
    },
    subTasks:[subTasks]
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);


module.exports = Task