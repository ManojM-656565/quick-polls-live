const mongoose=require('mongoose')

const activityLogSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    actionType:{type:String,enum:["created_poll","voted","login","logout"]},
})

module.exports=mongoose.model("ActivityLog",activityLogSchema);