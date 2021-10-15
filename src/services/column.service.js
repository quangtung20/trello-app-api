import { columnModel } from '*/models/column.model.js';

let createNew = async (data) => {
    try {
        const result = await columnModel.createNew(data);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

let update = async (id, data) => {
    try {
        const updateData = {
            ...data,
            updatedAt: Date.now(),
        }
        const result = await columnModel.update(id, updateData);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}



export const columnService = {
    createNew,
    update,
}