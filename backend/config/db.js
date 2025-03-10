import mongoose from 'mongoose';
import dotenv from 'dotenv'; 

// Load environment variables from secret file
dotenv.config(); 
export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    }catch (error){

    }
}