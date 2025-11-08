const Poll =require("../models/poll.model")

const create=async(req,res)=>{
    try{
        const{title,description,options,expiryTime}=req.body;

        if(!title||!options||!expiryTime){
            return res.status(400).json({
                message:"All values are required"
            })
        }

        const poll=new Poll({
            title,
            description,
            options:options.map((option)=>({text:option})),
            expiryTime,
            createdBy:req.user._id,
        });
        await poll.save();

        res.status(201).json({
            message:"Poll created successfully",
            poll,
        })


    }catch(error){
        res.status(500).json({message:"Internal server error"});
    }
}