const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const authRoutes = require('./routes/auth')
const createRoutes = require('./routes/create')
dotenv.config()
const PORT = process.env.PORT || 5000
const {connectDB} = require("./db/connection");



app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.json({"message":"Server is running"})
})

app.use('/auth',authRoutes)
app.use('/create',createRoutes)



app.listen(PORT,()=>{
    connectDB()
    console.log(`server started at ${PORT}`)
})