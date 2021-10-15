import { cardService } from "../services/card.service";
import { httpStatusCode } from '*/ultilities/constants.js'
const createNew = async (req, res) => {
    try {
        const result = await cardService.createNew(req.body);
        res.status(httpStatusCode.OK).json(result)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER).json({
            error: error.message,
        })
    }
}

export const cardController = { createNew }