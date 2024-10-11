import { Router } from "express";
import authAdminController from "../../controllers/Admin/auth.admin.controller";
import { loginDataValidator, registerDataValidator } from "../../validators/auth.validator";

const router=Router();

router.post('/register',registerDataValidator ,authAdminController.register);
router.post('/login',loginDataValidator ,authAdminController.login);


export default router;