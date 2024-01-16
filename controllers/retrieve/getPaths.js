const { Path } = require("../../models/path")


const getAllPaths = async(req,res)=>{
    try {
        const {pageNo,pageSize} = req.body
        const paths = await Path.find().skip(pageNo*pageSize).limit(pageSize)
        if(!paths) return res.status(403).json({error:"Paths are empty"})

        return res.status(200).json({paths})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}


module.exports = getAllPaths