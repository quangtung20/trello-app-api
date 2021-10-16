import { boardModel } from "../models/board.model";

const createNew = async (data) => {
    try {
        const result = await boardModel.createNew(data);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

const getFullBoard = async (boardId) => {
    try {
        const board = await boardModel.getFullBoard(boardId);
        board.columns.forEach(column => {
            column.cards = board.cards.filter(c => c.columnId.toString() === column._id.toString());
        })
        //dang le nen sort nhung nen sort o frontend
        //remove card data
        delete board.cards;
        console.log(board);
        return board;
    } catch (error) {
        throw new Error(error);
    }
}
export const boardService = {
    createNew,
    getFullBoard,
};