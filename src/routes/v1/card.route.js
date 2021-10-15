import express from 'express';
import { httpStatusCode } from '*/ultilities/constants.js'
import { cardController } from '*/controllers/card.controller.js'
import { cardValidation } from '*/validations/card.validation.js'
let router = express.Router();

router.route('/')
    .post(cardValidation.createNew, cardController.createNew);
export const cardRoute = router;