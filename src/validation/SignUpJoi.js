import Joi from "joi";
import validation from "./validation";

const SignUpJoi = Joi.object ({
first: Joi.string().min(2).max(256).required(),
middle: Joi.string().min(2).max(256).allow(""),
last: Joi.string().min(2).max(256).required(),
phone: Joi.string()
.min(9)
.max(11)
.pattern(/^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/)
.required(),
    email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .required(),
    password: Joi.string().min(7).max(20).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-+])[A-Za-z\d!@#$%^&*()-+]{9,}$/)
.required(),
        url: Joi.string().min(14).allow(""),
        alt: Joi.string().min(2).max(256).allow(""),
        state: Joi.string().min(2).max(256).allow(''),
        country: Joi.string().min(2).max(256).required(),
        city: Joi.string().min(2).max(256).required(),
        street: Joi.string().min(2).max(256).required(),
        houseNumber: Joi.number().min(2).max(256).required(),
        zip: Joi.number().min(2).max(256).required(),
    isBusiness: Joi.boolean().required()
})

const validateSignUp = (inputToCheck) => 
 validation(SignUpJoi, inputToCheck)

export default validateSignUp;