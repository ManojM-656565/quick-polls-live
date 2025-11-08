const jwt=require("jsonwebtoken");
const User=require("../models/user.model");
module.exports=async (req,res,next)=>{
    // const authHeader=req.headers.authorization;
    // if(!authHeader||!authHeader.startsWith("Bearer ")){
    //     return res.status(401).json({
    //         message:"Unauthorized",
    //     });
    // }
    // const token=authHeader.split(" ")[1];
    const token=req.cookies.token;
    try{
        const payload=jwt.verify(token,process.env.JWT_SECRET);
        const user=await User.findById(payload.id).select("-password");

        if(!user){
            return res.status(401).json({
                message:"Unauthorized",
            })
        }
        req.user=user;
        next();
    }
    catch(error){
        return res.status(401).json({
            message:"Invalid token",
        })
    }
}