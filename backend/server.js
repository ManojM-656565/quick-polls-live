const express=require('express')
const dotenv=require('dotenv');
const { connectDB } = require('./lib/db');
const authRoutes =require("./routes/user.route");
const pollRoutes=require('./routes/poll.routes')
const cors=require("cors")
const cookieParser = require("cookie-parser");


dotenv.config()

const app=express()

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/api/auth",authRoutes);
app.use("/api/polls",pollRoutes);


const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running in port ${PORT}`);
    connectDB();
})