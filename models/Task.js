const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    taskName:{
        type:String,
        required:true,
        max:20
    },
    lastScheduledAt:{
       type:Date
    },
    tasks:[{
      taskName:{
        type:String,
        required:true
      },
      type:{
        type:String
      },
    }]
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task