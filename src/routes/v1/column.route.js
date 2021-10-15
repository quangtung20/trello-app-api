import express from 'express';
import { httpStatusCode } from '*/ultilities/constants.js'
import { columnController } from '*/controllers/column.controller.js'
import { columnValidation } from '*/validations/column.validation.js'
let router = express.Router();

router.route('/')
    .post(columnValidation.createNew, columnController.createNew);
router.route('/:id')
    .put(columnValidation.update, columnController.update);
export const columnRoute = router;