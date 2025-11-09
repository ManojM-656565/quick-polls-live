const Poll =require("../models/poll.model")

const create=async(req,res)=>{
    try{
        const{title,description,options,expiryTime}=req.body;

        if(!title||!options||!expiryTime){
            return res.status(400).json({
                message:"All values are required"
            })
        }

        const poll=await Poll.create({
            title,
            description,
            options:options.map((option)=>({text:option})),
            expiryTime,
            createdBy:req.user._id,
        });
        // await poll.save();

        res.status(201).json({
            message:"Poll created successfully",
            poll,
        })


    }catch(error){
        res.status(500).json({message:"Internal server error"});
        console.error(error)
    }
}

const getAll=async(req,res)=>{
    try{
        const polls=await Poll.find().populate("createdBy","name email").sort({createdAt:-1});
        res.status(200).json({polls});
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Internal Server Error"});
    }
}

const getPolls=async(req,res)=>{
    try{
        const polls=(await Poll.find({createdBy:req.user._id})).sort({createdAt:-1});
        res.status(200).json({polls});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Internal server error"});
    }
}

const getById=async(req,res)=>{
    try{
        const poll=await Poll.findById(req.params.id).populate("createdBy","name email");
        res.status(200).json({poll});
    }
    catch(error){
        res.status(500).json({message:"Internal server error"});
    }
}

const update=async(req,res)=>{
    try{
        const {id} =req.params;
        const {title,description,options,expiryTime,status}=req.body;
        const poll=await Poll.findById(id);
        if(!poll) return res.status(404).json({message:"Poll not found"});

        poll.title=title||poll.title;
        poll.description=description||poll.description;
        poll.expiryTime=expiryTime||poll.expiryTime;
        poll.status=status||poll.status;
        if(options&&options.length>=2){
            poll.options=options.map((opt)=>({text:opt}));
        }
        await poll.save();

        res.status(200).json({message:"Poll updated successfully",poll});
    }
    catch(error){
        res.status(500).json({message:"Internal server error"});
    }
}

const deletePoll=async(req,res)=>{
    try{
        const {id} =req.params;
        const poll=await Poll.findById(id);
        if(!poll){
            return res.status(404).json({message:"Poll not found"});
        }
        await poll.deleteOne();
        res.status(200).json({message:"Poll deleted successfully"});
    }
    catch(error){
        res.status(500).json({message:"Internal server error"});
    }
}


const generateResult=async(req,res) =>{
    try{
        const poll =await Poll.findById(req.params.id);
        if(!poll) return res.status(404).json({message:"Poll not found"});

        const totalVotes=poll.options.reduce((s,o)=>s+o.voteCount,0)

        const winnerOption=null;
        winnerOption=poll.options.reduce((max,o)=>
            o.voteCount>max.voteCount ? o: max
        )

        const engagementRatio=0  //update later
        const options=poll.options.map(option=>({
            optionId:option._id,
            text:option.text,
            voteCount:opt.voteCount,
            percentage:Number((option.voteCount/totalVotes)*100)
        }));


        const result=new Result({
            pollId:poll._id,
            title:poll.title,
            description:poll.description,
            options:options,
            winnerOptionId:winnerOption._id,
            engagementRatio,
        })

        await result.save();

        poll.status="expired"
        await poll.save();

        res.status(201).json({message:"Result generated successfully",
        result,
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Internal server error"});
    }
}

module.exports={create,getAll,getById,update,deletePoll,generateResult,getPolls};