import express from 'express'
import { mapOrder, mapOrder2 } from './ultilities/sorts';
const app = express();

const port = 8017;
app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(port, () => {
    console.log('app listen on port :', port);
})
  // tu phien ban node 12 tro len thi chi can khai bao them type : module o trong package.json la khong can cai .babelrc