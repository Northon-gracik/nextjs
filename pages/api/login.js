import { MongoClient, Db} from 'mongodb';
import url from 'url';

let cacheDb;

const connectToDatabase = async ( uri ) => {

    if( cacheDb ){
        return cacheDb
    }

    const client = await MongoClient.connect( uri, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    
    const dbname = url.parse(uri).pathname.substr(1);

    const db = client.db(dbname);

    cacheDb = db;

    return db;
} 

export default async (req, res) => {
    const {email} = req.body;

    const db = await connectToDatabase(process.env.MONGODB_URI);

    const collection = db.collection('teste');

    await collection.insertOne({
        email: email,
        subscribedAt: new Date(),

    })

    res.status(201).json({ ok: true})
}