import { body } from "express-validator";

export const taskDataValidator =[
    body("userId").trim().isMongoId().withMessage("Id should be a mongoId").notEmpty().withMessage("ID should not be empty"),
    body("task").trim().isString().withMessage("Task should be a valid string").notEmpty().withMessage("Task should not be empty"),
    body("admin").trim().notEmpty().withMessage("Admin field should not be empty").isString().withMessage("Admin should be a string")
]