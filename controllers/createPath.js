const Path = require("../models/path")



const createPath = async(req,res)=>{
    try {
        const {name,mapId,nodes} = req.body

    if(!name || !nodes || !mapId) return res.status(403).json({error:"Required data is insufficient"})

    const path = new Path({
        name,
        mapId,
        nodes
    })

    const savePath = await path.save()

    return res.status(200).json({message:"Path has been saved",path:savePath})
    } catch (error) {
        return res.status(500).json({error})
    }
} 


module.exports = {createPath}