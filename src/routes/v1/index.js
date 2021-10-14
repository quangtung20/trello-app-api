import express from 'express';
import { httpStatusCode } from '*/ultilities/constants.js'
import { boardRoute } from './board.route'

let router = express.Router();

router.get('/status', (req, res) => {
    return res.status(200).json('done');
})

router.use('/boards', boardRoute);
export const apiV1 = router;