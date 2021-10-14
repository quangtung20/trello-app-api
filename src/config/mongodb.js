import { MongoClient } from 'mongodb';
import { env } from '*/config/environment';


//Pass: Wc8Jm0vjjsYvrkUJ
const uri = env.MONGODB_URI;



export const connectDB = async () => {
    const client = new MongoClient(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    try {
        await client.connect();
        await listDataBases(client);
        console.log('connect successfully');
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

const listDataBases = async (client) => {
    const database = await client.db().admin().listDatabases();
    database.databases.forEach(element => {
        console.log(element);
    });
}