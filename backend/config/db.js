import mongoose from 'mongoose';

//general use case for mongoose is to connect to database and then export the connection
//exporting mongoose module
export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        //console message to show that we are connected to the database
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    }catch (error){
        console.error(`Error connecting to MongoDB: ${error.message}`); // Log the error
        process.exit(1);
    // 1 means failure, 0 success
    }
}