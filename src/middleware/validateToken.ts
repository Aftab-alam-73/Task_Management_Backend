import { Response,NextFunction } from "express";
import { CustomRequest } from "../types/user";
import Jwt  from "jsonwebtoken";
type payload={
    id:string
    role:string
   
}
export const validateToken=(req:CustomRequest,res:Response,next:NextFunction):any=>{
    const token=req.headers['authorization']?.split(" ")[1];
    if(!token) return res.status(401).json({status:false,error:"Unauthorized access"});
    console.log("token: " + token);
    try{
       const result= Jwt.verify(token,process.env.JWT_SECRET_KEY!) as payload;
       req.userId=result.id;
       req.role=result.role;
       next();
    }catch(err:any){
        return res.status(401).json({status:false,error:"Unauthorized access"});
    }
}
