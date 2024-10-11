import mongoose from "mongoose";

// User Schema
const UserSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    role:{type:String, required:true,default:"user"},
    isActive:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now}
})

export default mongoose.model("User", UserSchema);