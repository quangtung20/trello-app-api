import { cardModel } from "../models/card.model.js";
import { columnModel } from "../models/column.model.js";
const createNew = async (data) => {
    try {
        const newCard = await cardModel.createNew(data);
        await columnModel.pushCardOrder(newCard.columnId.toString(), newCard._id.toString());
        return newCard;
    } catch (error) {
        throw new Error(error);
    }
}
export const cardService = { createNew };