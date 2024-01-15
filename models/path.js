const mongoose = require("mongoose");

const position = new mongoose.Schema({
    x:{
        type:String,
        required:true
    },
    y:{
        type:String,
        required:true
    },
    z:{
        type:String,
        required:true
    }
})




const NodeSchema = new mongoose.Schema(
  {
    position:position,
    released:{
      type:Boolean,
      default:false
    },
    action:{
        type:String,
    }

  },
);


const PathSchema = new mongoose.Schema(
  {
   name:{
    type:String,
    required:true
   },
   mapId:{
    type:String,
   },
   nodes:[NodeSchema]
  },
  { timestamps: true }
);

const Path = mongoose.model("Path", PathSchema);


module.exports = {Path,position}