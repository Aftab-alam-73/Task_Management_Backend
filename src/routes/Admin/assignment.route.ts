import { Router } from "express";
import adminAssignmentController from '../../controllers/Admin/assignment.admin.controller';
import { validateToken } from "../../middleware/validateToken";
import { checkPermission } from "../../middleware/checkPermission";

const router=Router();


router.get("/assignments",validateToken,checkPermission(["admin"]),adminAssignmentController.getAllAssignments);
router.put("/assignments/:id/accept",validateToken,checkPermission(["admin"]),adminAssignmentController.accecptTask);
router.put("/assignments/:id/reject",validateToken,checkPermission(["admin"]),adminAssignmentController.rejectTask);


export default router;