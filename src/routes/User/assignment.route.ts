import { Router } from "express";
import userAssignmentController from "../../controllers/User/assignment.user.controller";
import { taskDataValidator } from "../../validators/task.validator";
import { validateToken } from "../../middleware/validateToken";
import { checkPermission } from "../../middleware/checkPermission";

const router=Router();

router.post('/upload',taskDataValidator,validateToken,checkPermission(["user"]),userAssignmentController.createTask);


export default router;