const mongoose=require('mongoose')

const resultSchema=new mongoose.Schema({
    pollId:{type:mongoose.Schema.Types.ObjectId,ref:"Poll",required:true},
    title:{type:String},
    description:{type:String},
    options:[
        {
            optionId:{type:mongoose.Schema.Types.ObjectId,required:true},
            text:String,
            voteCount:{type:Number,default:0},
            percentage:{type:Number,default:0},
        }
    ],
    totalVotes:{type:Number,default:0},
    winnerOptionId:{type:mongoose.Schema.Types.ObjectId},
    engagementRatio:{type:Number,default:0},
});


module.exports=mongoose.model("Result",resultSchema)