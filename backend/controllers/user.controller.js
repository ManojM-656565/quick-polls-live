const userModel = require("../models/user.model");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const register=async(req,res)=>{
    const{name,password,email,role}=req.body;
    if(!name||!password||!email){
       return res.status(400).json({message:"Fields are missing"});
    }

    try{
        const exist=userModel.findOne({email});
        if(!exist){
            return res.status(400).json({message:"Email already exists"});
        }
        const hashed=await bcrypt.hash(password,10);
        const user=await userModel.create({name,email,role,password:hashed})

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN});
        
        res.cookie("token",token,{
            httpOnly:true,
            sameSite:"strict",
            secure:process.env.NODE_ENV==="production",
            maxAge:24*60*60*1000
        })
        res.status(201).json({
            message:"User created successfully",
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
            }
        })

    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Internal server err"});
    }

}

const login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await userModel.findOne({email});
        if(!user){
            res.status(401).json({message:"Invalid user credentials"});
        }
        const ok=await bcrypt.compare(password,user.password);
        if(!ok){
            res.status(401).json({message:"Invaild credentials"});
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRES_IN
        });
        res.cookie("token",token,{
            sameSite:"strict",
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            maxAge:24*60*60*1000
        })
        res.status(201).json({
            message:"User Logged In successfully",
            user:{
                name:user.name,
                email:user.email,
                id:user._id,
                role:user.role
            }

        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Internal server error"});
    }
}

const logout=async(req,res)=>{
    try{
        res.cookie("token","",{
            maxAge:0
        });
        res.status(200).json({message:"Logged out successfully"})
    }
    catch(error){
        res.status(500).json({message:"Internal server error"});
    }
}



module.exports={register,login,logout}