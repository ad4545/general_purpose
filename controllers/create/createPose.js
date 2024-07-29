const Pose = require("../../models/Pose")




const createPose = async(req,res)=>{
    try {
        const {poseName,position} = req.body

    if(!poseName || !position) return res.status(403).json({error:"Required data is insufficient"})

    const pose = new Pose({
        poseName,
        position
    })

    const savePose = await pose.save()

    return res.status(200).json({message:"Pose has been saved",pose:savePose})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
} 


module.exports = {createPose}