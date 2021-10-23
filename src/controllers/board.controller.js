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

const getFullBoard = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await boardService.getFullBoard(id);
        res.status(httpStatusCode.OK).json(result)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER).json({
            error: error.message,
        })
    }
}

let update = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await boardService.update(id, req.body);
        res.status(httpStatusCode.OK).json(result);
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER).json({
            error: error.message,
        })
    }
}

export const boardController = {
    createNew,
    getFullBoard,
    update
}