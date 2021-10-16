import Joi from 'joi';
import { getDB } from '../config/mongodb';
import { ObjectId } from 'mongodb';
//define card colection

const cardCollectionName = 'cards';
const cardCollectionSchema = Joi.object({
    boardId: Joi.string().required(),// also objectId when create new
    columnId: Joi.string().required(),// also objectId when create new
    title: Joi.string().required().min(3).max(30).trim(),
    cover: Joi.string().default(null),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false),
})

const validateSchema = async (data) => {
    return await cardCollectionSchema.validateAsync(data, { abortEarly: false });//log ra het cac loi
}

const createNew = async (data) => {
    try {
        const validateValue = await validateSchema(data);
        const insertValue = {
            ...validateValue,
            boardId: ObjectId(validateValue.boardId),
            columnId: ObjectId(validateValue.columnId)
        }
        const result = await getDB().collection(cardCollectionName).insertOne(insertValue);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

export const cardModel = { createNew }