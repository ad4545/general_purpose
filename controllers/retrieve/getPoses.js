const Pose = require("../../models/Pose")

const getAllPoses = async(req,res)=>{
    try {
        const {pageNo,pageSize} = req.body
        const poses = await Pose.find().skip(pageNo*pageSize).limit(pageSize)
        if(!poses) return res.status(403).json({error:"Poses are empty"})

        return res.status(200).json({poses})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}


module.exports = getAllPoses