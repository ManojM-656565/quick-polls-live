const mongoose=require('mongoose')

const optionSchema=new mongoose.Schema({
    text:{type:String,required:true},
    voteCount:{type:Number,default:0}
});

const pollSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String},
    options:[optionSchema],
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    expiryTime:{type:Date,required:true},
    status:{type:String,enum:["active","expired"],default:"active"},
    totalVotes:{type:Number,default:0},
    createdAt:{type:Date,default:Date.now}

});


module.export=mongoose.model("Poll",pollSchema);