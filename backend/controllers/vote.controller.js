const activityLogModel = require("../models/activityLog.model");
const Poll=require("../models/poll.model")
const Vote=require("../models/vote.model")

const castVote=async(req,res)=>{
    try{
        const {pollId,optionId}=req.body;
        const userId=req.user._id;

        const poll=await Poll.findById(pollId);
        if(!poll) return res.status(404).json({message:"Poll not found"});

        if(new Date()>new Date(poll.expiryTime)){
            return res.status(400).json({message:"Poll has expired"});
        }

        // const alreadyVoted=await Vote.findOne({poll:pollId,user:userId});
        // if(alreadyVoted){
        //     return res.status(400).json({message:"You have already voted"});
        // }

        const vote=await Vote.create({poll:pollId,option:optionId,user:userId});

        await Poll.updateOne(
            {_id:pollId,"options._id":optionId},
            {$inc:{"options.$.voteCount":1,totalVotes:1}}
        )

        ///socket io for future
         const updatedPoll = await Poll.findById(pollId);
         io.emit("voteUpdate", updatedPoll);
          await activityLogModel.create({
               user:req.user._id,
               actionType:"voted"
             });

        res.status(200).json({message:"Vote casted successfully",vote});
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Internal server error"});
    }
}

module.exports={castVote};