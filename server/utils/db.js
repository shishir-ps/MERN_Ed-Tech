import mongo from 'mongoose';


const URI = 'mongodb+srv://Shishir:Shishir%404414@cluster0.yc8jr.mongodb.net/SnapIT?retryWrites=true&w=majority&appName=Cluster0';



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