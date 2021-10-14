import express from 'express';
import { httpStatusCode } from '*/ultilities/constants.js'
import { boardController } from '*/controllers/board.controller.js'
import { boardValidation } from '*/validations/board.validation.js'
let router = express.Router();

router.route('/')
    .get((req, res) => {
        res.status(httpStatusCode.OK).json({
            message: 'get',
        })
    })
    .post(boardValidation.createNew, boardController.createNew)
export const boardRoute = router;