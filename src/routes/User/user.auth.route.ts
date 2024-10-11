import { Router } from "express";
import authUserController from "../../controllers/User/auth.user.controller";
import { loginDataValidator, registerDataValidator } from "../../validators/auth.validator";
import { validateToken } from "../../middleware/validateToken";
import { checkPermission } from "../../middleware/checkPermission";

const router=Router();

router.post('/register',registerDataValidator ,authUserController.register);
router.post('/login',loginDataValidator ,authUserController.login);


export default router; 