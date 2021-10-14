import { boardService } from "../services/board.service";
import { httpStatusCode } from '*/ultilities/constants.js'
const createNew = async (req, res) => {
    try {
        const result = await boardService.createNew(req.body);
        res.status(httpStatusCode.OK).json(result)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER).json({
            error: error.message,
        })
    }
}

export const boardController = { createNew }