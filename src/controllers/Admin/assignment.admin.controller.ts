import { Request,Response } from "express";
import Assignment from "../../models/assignment";
import { CustomRequest } from "../../types/user";


class AdminAssignmentController {
  
    // Get All the assignments associated with a particular admin name.
    async getAllAssignments(req:Request,res:Response): Promise<any> {
        console.log(req.query.name);
        try{
            const assignments = await Assignment.find({ admin: req.query.name })  // Filter by admin name
            .populate("userId", "name email role")  // Populate the user data with selected fields
            .exec();

           return res.status(200).json({status:true,data:assignments});
        }catch(err:any){
          return res.status(500).json({status:false, error:err});
        }
    }

    // Accept a particular assignment.
    async accecptTask(req:Request,res:Response):Promise<any> {
      try{
         const acceptedTask=await Assignment.findOneAndUpdate({ _id: req.params.id }, { status: "accepted" }, { new: true });
         return res.status(200).json({status:true,data:acceptedTask});
      }catch(err:any){
        return res.status(500).json({status:false, error:err});
      }
    }
    // Reject a particular assignment
    async rejectTask(req:Request,res:Response):Promise<any> {
        try{
            const acceptedTask=await Assignment.findOneAndUpdate({ _id: req.params.id }, { status: "rejected" }, { new: true });
            return res.status(200).json({status:true,data:acceptedTask});
         }catch(err:any){
           return res.status(500).json({status:false, error:err});
         }
    }
}

export default new AdminAssignmentController();