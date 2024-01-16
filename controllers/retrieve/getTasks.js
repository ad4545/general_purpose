const Task = require("../../models/Task")

const getAllTasks = async(req,res)=>{
    try {
        const {pageNo=0,pageSize=1} = req.body
        const tasks = await Task.find().skip(pageNo*pageSize).limit(pageSize)
        if(!tasks) return res.status(403).json({error:"Tasks are empty"})

        return res.status(200).json({tasks})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}


module.exports = getAllTasks