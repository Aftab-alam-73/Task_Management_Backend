import { Request,Response } from "express";
import { validationResult,matchedData } from "express-validator";
import User from "../../models/user";
import Utils from "../../utility/utils";

class AdminAuthentication{

   // Register an admin.
 async register(req: Request, res: Response):Promise<any> {
   // Validating the request body data.
   const result=validationResult(req);
   if (!result.isEmpty()) {
     return res.status(400).json({ errors: result.array() });
   }
   const payload=matchedData(req);
   payload.role="admin";
  
//  Registering the user.
  try{
     const user=await User.findOne({email:payload.email});
     if(user)return res.status(400).json({status:false, message:"User already exists"});
     const hashedPassword=await Utils.getHashPassword(payload.password);
     const newUser=await User.create({...payload,password:hashedPassword});
     return res.status(201).json({status:true, message:"User registered successfully", data:newUser});
 
  }catch(err:any){
     return res.status(500).json({status:false, error:err});

  }
 }

 // Login an admin.
 async login(req: Request, res: Response):Promise<any>{
    const result=validationResult(req);
    if(!result.isEmpty()) return res.status(400).json({ errors: result.array() });
    const payload=matchedData(req);
    try{
        const user=await User.findOne({email:payload.email});
        if(!user) return res.status(404).json({status:false, message:"User not found"});
        const isMatch=await Utils.validatePassword(payload.password, user.password);
        if(!isMatch || user.role!="admin") return res.status(401).json({status:false, message:"Invalid credentials"});
        const token=await Utils.getJwtToken({id:user._id, role:user.role});
        return res.cookie("access_token",token,{httpOnly:true}).json({status:true, message:"Logged in successfully", data:user});
    }catch(err){
      return res.status(500).json({status:false, error:err});
    }
 }
}

export default new AdminAuthentication();