import mongoose, { Schema } from "mongoose";

// Assignment (Task) Schema
const AssignmentSchema=new mongoose.Schema({
   userId:{type:Schema.Types.ObjectId,ref:"User",required:true},
   task:{type:String,required:true},
   admin:{type:String,required:true},
   status:{type:String,required:true,default:"pending"},
})

export default mongoose.model("AssignmentUser", AssignmentSchema);