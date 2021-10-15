import { columnService } from '../services/column.service'
import { httpStatusCode } from '../ultilities/constants'

let createNew = async (req, res) => {
    try {
        const result = await columnService.createNew(req.body);
        res.status(httpStatusCode.OK).json(result);
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER).json({
            error: error.message,
        })
    }
}

let update = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await columnService.update(id, req.body);
        res.status(httpStatusCode.OK).json(result);
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER).json({
            error: error.message,
        })
    }
}

export const columnController = {
    createNew,
    update,
};