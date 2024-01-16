const Pose = require("../../models/Pose")




const createPose = async(req,res)=>{
    try {
        const {name,mapId,position} = req.body

    if(!name || !position || !mapId) return res.status(403).json({error:"Required data is insufficient"})

    const pose = new Pose({
        name,
        mapId,
        position
    })

    const savePose = await pose.save()

    return res.status(200).json({message:"Pose has been saved",pose:savePose})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
} 


module.exports = {createPose}