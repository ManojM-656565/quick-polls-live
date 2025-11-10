const express=require('express')
const dotenv=require('dotenv');
const { connectDB } = require('./lib/db');
const authRoutes =require("./routes/user.route");
const pollRoutes=require('./routes/poll.routes')
const voteRotes=require("./routes/vote.route")
const cors=require("cors")
const cookieParser = require("cookie-parser");
const { Server, Socket } = require('socket.io');
const http = require("http");


dotenv.config()

const app=express()
const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        credentials:true,
    }
})

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/api/auth",authRoutes);
app.use("/api/polls",pollRoutes);
app.use("/api/vote",voteRotes);

io.on("connection",(socket)=>{
    console.log("User connected",socket.id);
    socket.on("disconnect",()=>{
        console.log("User disconnected",socket.id);
    })
})
global.io = io;
const PORT=process.env.PORT;
server.listen(PORT,()=>{
    console.log(`Server is running in port ${PORT}`);
    connectDB();
})