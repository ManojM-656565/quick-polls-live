const express=require('express')
const dotenv=require('dotenv');
const { connectDB } = require('./lib/db');
const authRoutes =require("./routes/user.route")
const cors=require("cors")

dotenv.config()

const app=express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/api/auth",authRoutes);


const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running in port ${PORT}`);
    connectDB();
})