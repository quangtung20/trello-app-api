import { columnModel } from '*/models/column.model.js';
import { boardModel } from '*/models/board.model.js';
import { cardModel } from '*/models/card.model.js';


let createNew = async (data) => {
    try {
        const newColumn = await columnModel.createNew(data);
        newColumn.cards = [];
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
        if (updateData._id) delete updateData._id;
        if (updateData.cards) delete updateData.cards;
        const updatedColumn = await columnModel.update(id, updateData);
        if (updatedColumn._destroy) {
            // delete many cards in column
            cardModel.deleteMany(updatedColumn.cardOrder);
        }
        return updatedColumn;
    } catch (error) {
        throw new Error(error);
    }
}



export const columnService = {
    createNew,
    update,
}