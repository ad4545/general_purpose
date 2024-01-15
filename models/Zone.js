const mongoose = require("mongoose");
const { coordinates } = require("./Lane");

const ZoneSchema = new mongoose.Schema(
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
    rotation:{
        type:String,
        required:true
    },
    width:{
        type:String,
        required:true
    },
    height:{
        type:String,
        required:true
    }

  },
  { timestamps: true }
);

const Zone = mongoose.model("Zone", ZoneSchema);


module.exports = Zone