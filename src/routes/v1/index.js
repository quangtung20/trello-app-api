import express from 'express';
import { httpStatusCode } from '*/ultilities/constants.js'
import { boardRoute } from './board.route'
import { columnRoute } from './column.route'
import { cardRoute } from './card.route'

let router = express.Router();

router.get('/status', (req, res) => {
    return res.status(200).json('done');
})

router.use('/boards', boardRoute);

router.use('/columns', columnRoute);

router.use('/cards', cardRoute);

export const apiV1 = router;