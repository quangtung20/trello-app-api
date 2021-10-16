import Joi from 'joi';
import { getDB } from '../config/mongodb';
import { ObjectId } from 'mongodb';
//define column colection

const columnCollectionName = 'columns';
const columnCollectionSchema = Joi.object({
    boardId: Joi.string().required(),// also objectId when create new
    title: Joi.string().required().min(3).max(30).trim(),
    cardOrder: Joi.array().items(Joi.string()).default([]),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false),
})

const validateSchema = async (data) => {
    return await columnCollectionSchema.validateAsync(data, { abortEarly: false });//log ra het cac loi
}

const pushCardOrder = async (columnId, cardId) => {
    try {
        const result = await getDB().collection(columnCollectionName).findOneAndUpdate(
            { _id: ObjectId(columnId) },
            { $push: { cardOrder: cardId } },
            { returnOriginal: false }
        )

        return result.value
    } catch (error) {
        throw new Error(error);
    }
}

const createNew = async (data) => {
    try {
        const validateValue = await validateSchema(data);
        const insertValue = {
            ...validateValue,
            boardId: ObjectId(validateValue.boardId)
        };
        const result = await getDB().collection(columnCollectionName).insertOne(insertValue);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

const update = async (id, data) => {
    try {
        const result = await getDB().collection(columnCollectionName).findOneAndUpdate(
            { _id: ObjectId(id) },
            { $set: data },
            { returnOriginal: false }
        )
        return result.value;
    } catch (error) {
        throw new Error(error);
    }
}
// cac ham thao tac mongodb: insertOne: them 1, findOneAndUpdate:Sua theo Id, remove: xoa

export const columnModel = {
    createNew,
    update,
    pushCardOrder,
}