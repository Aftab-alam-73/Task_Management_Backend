import { Request,Response } from "express";
import { matchedData, validationResult } from "express-validator";
import Assignment from "../../models/assignment";


class UserAssignmentController{

    // Create a new task for a user.
    async createTask(req: Request, res: Response): Promise<any> {
       const result=validationResult(req);
       if(!result.isEmpty())return res.status(400).json({ errors: result.array() });
       const payload=matchedData(req);
       
       try{
          const newTask=await Assignment.create(payload);
          return res.status(200).json({status:true,message:"Task created successfully", data:newTask});
       }catch(err:any){
          return res.status(500).json({status:false,error:err.message});
       }
    }
}

export default new UserAssignmentController();