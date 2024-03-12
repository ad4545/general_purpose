const { Path } = require("../../models/path")




const createPath = async(req,res)=>{
    try {
        const {paths,pathName} = req.body

    if(!paths || !pathName) return res.status(403).json({error:"Required data is insufficient"})

    const path = new Path({
        pathName,
        paths
    })

    const savePath = await path.save()

    return res.status(200).json({message:"Path has been saved",path:savePath})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
} 


module.exports = {createPath}