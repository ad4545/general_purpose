const mongoose = require("mongoose");
const { position, CoordinateSchema } = require("./path");

const PoseSchema = new mongoose.Schema(
  {
    poseName:{
        type:String,
        required:true
    },
    position:CoordinateSchema
  },
  { timestamps: true }
);

const Pose = mongoose.model("Pose", PoseSchema);


module.exports = Pose