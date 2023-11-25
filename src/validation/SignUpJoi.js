import Joi from "joi";


const SignUpJoi =  {
    name: Joi.object({
first: Joi.string().min(2).max(256).required(),
middle: Joi.string().min(2).max(256).allow(),
last: Joi.string().min(2).max(256).required()
    }).required(),
    phone: Joi.string().min(9).max(11).required(),
    email: Joi.string().min(5).required(),
    password: Joi.string().min(7).max(20).required(),
    image: Joi.object({
        url: Joi.string().min(14),
        alt: Joi.string().min(2).max(256)
    }),
    address: Joi.object({
        state: Joi.string().min(2).max(256).allow(''),
        country: Joi.string().min(2).max(256).required(),
        city: Joi.string().min(2).max(256).required(),
        street: Joi.string().min(2).max(256).required(),
        houseNumber: Joi.number().min(2).max(256).required(),
        zip: Joi.number().min(2).max(256).required(),
    }),
    isBusiness: Joi.boolean().required()
}

export default SignUpJoi;