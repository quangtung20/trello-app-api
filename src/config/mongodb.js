import { MongoClient } from 'mongodb';
import { env } from '*/config/environment';

let dbInstance = null;

//Pass: Wc8Jm0vjjsYvrkUJ
const uri = env.MONGODB_URI;



export const connectDB = async () => {
    const client = new MongoClient(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    //connect client to the server
    await client.connect();

    dbInstance = client.db(env.DATABASE_NAME);
}

//get database instance

export const getDB = () => {
    if (!dbInstance) throw new Error('Must connect to database first!');
    return dbInstance;
}