import express from 'express'
import { connectDB } from '*/config/mongodb';
import { env } from '*/config/environment';

const app = express();

const port = env.PORT;
connectDB();

app.get('/', (req, res) => {
    res.send('hello world');
})


app.listen(port, () => {
    console.log('app listen on port :', port);
})
  // tu phien ban node 12 tro len thi chi can khai bao them type : module o trong package.json la khong can cai .babelrc