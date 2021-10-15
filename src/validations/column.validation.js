import Joi from 'joi';
import { httpStatusCode } from '*/ultilities/constants.js';

const createNew = async (req, res, next) => {
    const condition = Joi.object({
        boardId: Joi.string().required(),
        title: Joi.string().required().min(3).max(30).trim(),
    })
    try {
        await condition.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        res.status(httpStatusCode.BAD_REQUEST).json({
            error: new Error(error).message
        })
    }
}

const update = async (req, res, next) => {
    const condition = Joi.object({
        title: Joi.string().min(3).max(30).trim(),
    })
    try {
        await condition.validateAsync(req.body, {
            abortEarly: false,
            allowUnknown: true,
        });
        next();
    } catch (error) {
        res.status(httpStatusCode.BAD_REQUEST).json({
            error: new Error(error).message
        })
    }
}

export const columnValidation = {
    createNew,
    update,
};