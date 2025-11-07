const express=require('express')
const dotenv=require('dotenv');
const { connectDB } = require('./lib/db');

dotenv.config()

const app=express()

app.use(express.json())

app.use("/api/auth",authRoutes);


const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running in port ${PORT}`);
    connectDB();
})