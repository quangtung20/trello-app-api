import express from 'express';
import { httpStatusCode } from '*/ultilities/constants.js'
import { boardController } from '*/controllers/board.controller.js'
import { boardValidation } from '*/validations/board.validation.js'
let router = express.Router();

router.route('/')
    .post(boardValidation.createNew, boardController.createNew);

router.route('/:id')
    .get(boardController.getFullBoard)
    .put(boardValidation.update, boardController.update);
export const boardRoute = router;