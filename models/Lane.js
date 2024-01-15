const mongoose = require("mongoose");

const coordinates = new mongoose.Schema({
    x:{
        type:String,
        required:true
    },
    y:{
        type:String,
        required:true
    }
})



const LaneSchema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    start:coordinates,
    end:coordinates,
    rotation:{
        type:String,
        required:true
    },
    width:{
        type:String,
        required:true
    }
  },
  { timestamps: true }
);

const Lane = mongoose.model("Lane", LaneSchema);


module.exports = {Lane,coordinates}