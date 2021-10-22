import express from 'express';
import cors from 'cors';
import { connectDB, getDB } from '*/config/mongodb';
import { env } from '*/config/environment';
import { boardModel } from './models/board.model';
import { apiV1 } from './routes/v1';
import { corsOptions } from './config/cors';



const port = env.PORT;
connectDB()
    .then(() => { console.log('Connect success to db'); })
    .then(() => bootServer())
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
// dam bao khi ket noi thanh cong moi khoi tao ung dung, neu ko tra loi luon


// tu phien ban node 12 tro len thi chi can khai bao them type : module o trong package.json la khong can cai .babelrc

const bootServer = () => {
    const app = express();
    app.use(cors(corsOptions));
    // enable req.body 
    app.use(express.json());
    app.use('/v1/api', apiV1);

    app.listen(port, () => {
        console.log('app listen on port :', port);
    })
}

