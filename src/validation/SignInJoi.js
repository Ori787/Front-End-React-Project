import Joi from "joi";

const SignInJoi = Joi.object({
    email: Joi.string().min(5).required(),
    password: Joi.string().min(7).max(20).required()
})