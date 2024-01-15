const Zone = require("../models/Zone");


const createZone = async (req, res) => {
    try {
        const {name,type,start,rotation,width,height} = req.body

    if(!name || !type || !start || !height || !rotation || !width) return res.status(403).json({error:"Required data is insufficient"})

    const zone = new Zone({
       name,
       type,
       start,
       rotation,
       width,
       height
    })

    const saveLane = await zone.save()

    return res.status(200).json({message:"Lane has been saved",pose:saveLane})
    } catch (error) {
        return res.status(500).json({error})
    }
};


module.exports = createZone