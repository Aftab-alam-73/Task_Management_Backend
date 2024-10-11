import { body } from "express-validator";

export const registerDataValidator =[
    body("name").trim().isString().withMessage("Name should be a string").notEmpty().withMessage("Name should not be empty").isLength({min:3,max:15}).withMessage("Name should be 3-15 characters"),
    body("email").trim().notEmpty().withMessage("Email should not be empty").isEmail().withMessage("Email should be a valid email address"),
    body("password").trim().notEmpty().withMessage("Password should not be empty").isString()
]


export const loginDataValidator=[
    body("email").trim().notEmpty().withMessage("Email should not be empty").isEmail().withMessage("Email should be a valid email address"),
    body("password").trim().notEmpty().withMessage("Password should not be empty").isString()
]