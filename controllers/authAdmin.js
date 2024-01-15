const bcrypt = require('bcrypt')
const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken')

const registerAdmin = async (req,res) => {
  try {
    const {username,password} = req.body
   //  console.log(username,password)

    if(!username || !password) return res.status(400).json({error:"Required credentials not provided"})

    const isAdminExist = await Admin.findOne({username})

    if(isAdminExist) return res.status(422).json({error:"Admin already exists"})

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)

    const admin = new Admin({
        username,
        password:hashPassword
    })

    const storeAdmin = await admin.save()

    

    return res.status(200).json({message:"Admin has been registered",admin:storeAdmin})



  } catch (error) {
     return res.status(500).json({error})
  }  
};

const loginAdmin = async(req,res)=>{
     try {
        const {username,password} = req.body
        
        const adminExist = await Admin.findOne({username})

        if(!adminExist) return res.status(400).json({error:"admin not exists"})

        const isMatch = await bcrypt.compare(password,adminExist.password)

        if(!isMatch) return res.status(400).json({error:"password do not match"})

        const token = jwt.sign({id:adminExist._id},process.env.secret,{
         expiresIn:'24h'
        })

        return res.status(200).json({message:"Admin has been login",token})

     } catch (error) {
        return res.status(500).json({error})
     }
}



module.exports = {registerAdmin,loginAdmin}