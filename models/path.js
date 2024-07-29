const mongoose = require("mongoose");



const CoordinateSchema = new mongoose.Schema(
  {
    translation:{
      x:{
        type:Number
      },
      y:{
        type:Number
      },
      z:{
        type:Number
      }
    },
    rotation:{
      x:{
        type:Number
      },
      y:{
        type:Number
      },
      z:{
        type:Number
      },
      w:{
        type:Number
      }
    }
  }
);





const position = new mongoose.Schema({
    pathName:{
      type:String
    },
    paths:[CoordinateSchema]
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
    pathName:{
    type:String
  },
  paths:[CoordinateSchema]
  },
  { timestamps: true }
);

const Path = mongoose.model("Path", PathSchema);


module.exports = {Path,position,CoordinateSchema}