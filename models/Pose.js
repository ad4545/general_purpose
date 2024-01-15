const mongoose = require("mongoose");
const { position } = require("./path");

const PoseSchema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true
    },
    mapId:{
        type:String
    },
    position:position
  },
  { timestamps: true }
);

const Pose = mongoose.model("Pose", PoseSchema);


module.exports = Pose