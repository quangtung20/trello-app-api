import { columnModel } from '*/models/column.model.js';
import { boardModel } from '*/models/board.model.js';


let createNew = async (data) => {
    try {
        const newColumn = await columnModel.createNew(data);
        // update column order array in board
        await boardModel.pushColumnOrder(newColumn.boardId.toString(), newColumn._id.toString());
        return newColumn;
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