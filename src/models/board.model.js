import { ObjectID } from 'mongodb';
import Joi from 'joi';
import { getDB } from '../config/mongodb';
import { columnModel } from './column.model';
import { cardModel } from './card.model';
//define board colection

const boardCollectionName = 'boards';
const boardCollectionSchema = Joi.object({
    title: Joi.string().required().min(3).max(30).trim(),
    columnOrder: Joi.array().items(Joi.string()).default([]),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false),
})

const validateSchema = async (data) => {
    return await boardCollectionSchema.validateAsync(data, { abortEarly: false });//log ra het cac loi
}

const pushColumnOrder = async (boardId, columnId) => {
    try {
        const result = await getDB().collection(boardCollectionName).findOneAndUpdate(
            { _id: ObjectID(boardId) },
            { $push: { columnOrder: columnId } },
            { returnOriginal: false }
        )

        return result.value;
    } catch (error) {
        throw new Error(error);
    }
}

const createNew = async (data) => {
    try {
        const value = await validateSchema(data);
        const result = await getDB().collection(boardCollectionName).insertOne(value);
        return result.ops[0];
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * 
 * @param {string} boardId 
 * @param {string} columnId 
 */


const getFullBoard = async (boardId) => {
    try {
        const result = await getDB().collection(boardCollectionName).aggregate([
            {
                $match: {
                    _id: ObjectID(boardId)
                }
            },// gan giong where
            {
                $lookup: { //tao quan he bang board va bang column va lay dc cuc data cua column ra
                    from: columnModel.columnCollectionName,
                    // 2 dong nay phai so sanh localField vs boardId bang 
                    //nhau moi lay ra duoc du lieu ben trong cuc data
                    localField: '_id',
                    foreignField: 'boardId',
                    as: 'columns'
                }
            },
            {
                $lookup: { //tao quan he bang board va bang column va lay dc cuc data cua column ra
                    from: cardModel.cardCollectionName,
                    // 2 dong nay phai so sanh localField vs boardId bang 
                    //nhau moi lay ra duoc du lieu ben trong cuc data
                    localField: '_id',
                    foreignField: 'boardId',
                    as: 'cards'
                }
            }
        ]).toArray();

        console.log(result);

        return result[0] || {};
    } catch (error) {
        throw new Error(error);
    }
}


export const boardModel = {
    createNew,
    getFullBoard,
    pushColumnOrder,
}