import mongo from 'mongoose';


const URI = process.env.MONGO_DB_URI;


const connectDB = async () => {
    try {
        await mongo.connect(URI);
        console.log("DB Connected")
    } catch (error) {
        console.error("DB Connection Failed ");
        process.exit(0);
    }
};


export default connectDB;